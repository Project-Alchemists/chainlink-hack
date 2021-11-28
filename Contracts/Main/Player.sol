//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "./Registry.sol";
import "./PriceFeeds.sol";
import "./WageTokens.sol";
contract Character is ERC721Enumerable,Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    Counters.Counter private _totalMaleSales;
    Counters.Counter private _totalFemaleSales;
    
    Registry registry;    
    WageToken wage;

    struct playerInfo{
        bool isMale;
        uint tetheredToken;
        int tokenBaseline;
        uint birthDate;
        uint lastMate;
        uint lastFed;
    }

    uint public constant MINT_PRICE = 1 ether;
    
    uint public constant MALE_SUPPLY = 5000;
    uint public constant FEMALE_SUPPLY = 5000;
    
    mapping(uint=>playerInfo) players;
    mapping(uint=>string) imageCID;
    
    event playerBought(uint indexed tokenId,address indexed buyer,playerInfo Info);
    event playerBorn(uint indexed tokenId,address indexed buyer,playerInfo Info);
    event playerFed(uint indexed tokenId,address indexed owner,playerInfo Info);
    event playerHealed(uint indexed tokenId,address indexed owner,playerInfo Info);

    constructor(address regAddress,address wageAddress) ERC721("MetaPlayers","MTP"){
        registry = Registry(regAddress);
        wage = WageToken(wageAddress);
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        require(_exists(tokenId),"Token ID does not exist");
        playerInfo storage player = players[tokenId];
        uint age = block.timestamp - player.birthDate;
        if (age < 120 days && (block.timestamp-player.lastFed) < 23 days)
        {
            if(player.isMale){
                if(age > 90 days){
                    return imageCID[3];
                }
                else if (age > 60 days){
                    return imageCID[2];
                }
                else if(age > 30 days){
                    return imageCID[1];
                }
                else{
                    return imageCID[0];
                }
            }
            else{
                if(age > 90 days){
                    return imageCID[7];
                }
                else if (age > 60 days){
                    return imageCID[6];
                }
                else if(age > 30 days){
                    return imageCID[5];
                }
                else{
                    return imageCID[4];
                }
            }
        }
        else{
            return imageCID[8];
        }
    }
    
    function mate(uint tokenId1,uint tokenId2) external returns(playerInfo memory){
        playerInfo storage player1 = players[tokenId1];
        playerInfo storage player2 = players[tokenId2];
        require(_exists(tokenId1) && _exists(tokenId2),"Invalid token IDs");
        require(ownerOf(tokenId1) == msg.sender &&
                ownerOf(tokenId2) == msg.sender
                );
        require(player1.isMale != player2.isMale,"Need two separate gender tokens to mate");
        require(block.timestamp - player1.lastMate >= 10 days &&
                block.timestamp - player2.lastMate >= 10 days,"Players need 10 day cool down after mating");
        require(block.timestamp - player1.lastFed < 10 days && 
                block.timestamp - player2.lastFed < 10 days,"You can't make kids on an empty stomach");
        uint age1 = block.timestamp - player1.birthDate;
        uint age2 = block.timestamp - player2.birthDate;
        require(age1 > 60 days && age1 < 90 days && age2 > 60 days && age2 <90 days,"Only adults can be mated");
        PlayerPriceFeeds feed = PlayerPriceFeeds(registry.PriceFeedsContract());
        _tokenId.increment();
        _safeMint(msg.sender,_tokenId.current());
        
        bool male;
        uint randomness = vrf();
        if(randomness%2 == 0){
            male = true;
        }
        uint tetheredToken = randomness%feed.getFeedsCount();
        int basePrice = feed.getPriceFeed(tetheredToken);
        player1.lastMate = block.timestamp;
        player2.lastMate = block.timestamp;
        players[_tokenId.current()] = playerInfo(
                                                male,
                                                tetheredToken,
                                                basePrice,
                                                (block.timestamp),
                                                0,
                                                block.timestamp
                                                );
        emit playerBorn(_tokenId.current(),msg.sender,players[_tokenId.current()]);
        return players[_tokenId.current()];
    }
    
    function vrf() internal view returns (uint result) {
        uint[1] memory bn;
        bn[0] = block.number;
        assembly {
            let memPtr := mload(0x40)
            if iszero(staticcall(not(0), 0xff, bn, 0x20, memPtr, 0x20)) {
                invalid()
                }
        result := mload(memPtr)
        }
        result = uint(result);
    }
    
    function mint(bool isMale,uint tetheredToken) external payable returns(playerInfo memory){
        if(isMale){
            require(_totalMaleSales.current()<MALE_SUPPLY,"No more males can be minted");
            _totalMaleSales.increment();
        }
        else{
            require(_totalFemaleSales.current()<FEMALE_SUPPLY,"No more females can be minted");
            _totalFemaleSales.increment();
        }
        PlayerPriceFeeds feed = PlayerPriceFeeds(registry.PriceFeedsContract());
        require(tetheredToken < feed.getFeedsCount(),"Invalid tethered token");
        require(msg.value >= MINT_PRICE,"Invalid amount paid");
        _tokenId.increment();
        int basePrice = feed.getPriceFeed(tetheredToken);
        players[_tokenId.current()] = playerInfo(
                                                isMale,
                                                tetheredToken,
                                                basePrice,
                                                (block.timestamp - 60 days),
                                                0,
                                                block.timestamp
                                                );
        _safeMint(msg.sender,_tokenId.current());
        emit playerBought(_tokenId.current(),msg.sender,players[_tokenId.current()]);
        return players[_tokenId.current()];
    }
    
    function getPlayerInfo(uint tokenId) external view returns(playerInfo memory){
        return players[tokenId];
    }
    
    function getTokensMinted() external view returns(uint,uint){
        return (_totalMaleSales.current(),_totalFemaleSales.current());
    }

    function feedCharacter(uint tokenId) external {
        require(_exists(tokenId),"Token does not exist");
        require(wage.balanceOf(msg.sender) >= 20,"You do not have enough wage tokens to feed the player");
        require(wage.allowance(msg.sender,address(this)) >= 20,"Allow this contract at least 20 tokens");
        playerInfo storage player = players[tokenId];
        require(block.timestamp - player.lastFed <= 20 days,"Token needs hospital");
        player.lastFed = block.timestamp;
        wage.burnFrom(msg.sender,20);
        emit playerFed(tokenId,msg.sender,player);
    }

    function hospital(uint tokenId) external{
        require(_exists(tokenId),"Token does not exist");
        require(wage.balanceOf(msg.sender) >= 100,"You do not have enough wage tokens to feed the player");
        require(wage.allowance(msg.sender,address(this)) >= 100,"Allow this contract at least 20 tokens");
        playerInfo storage player = players[tokenId];
        require(block.timestamp - player.lastFed > 20 days,"Token needs to only be fed");
        wage.burnFrom(msg.sender,100);
        emit playerHealed(tokenId,msg.sender,player);
    }
}