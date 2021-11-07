//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "./Registry.sol";
import "./PriceFeeds.sol";

contract character is ERC721Enumerable,Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    
    Registry registry;    

    struct playerInfo{
        bool isMale;
        uint tetheredToken;
        int tokenBaseline;
        uint birthDate;
        uint lastMate;
    }

    uint public constant TOTAL_SUPPLY = 10000;
    uint public constant MINT_PRICE = 1 ether;
    uint private totalSales;
    
    mapping(uint=>playerInfo) players;
    mapping(uint=>string) imageCID;
    
    constructor(address regAddress) ERC721("MetaPlayers","MTP"){
        registry = Registry(regAddress);
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        require(_exists(tokenId),"Token ID does not exist");
        playerInfo storage player = players[tokenId];
        uint age = block.timestamp - player.birthDate;
        if (age < 120 days)
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
    
    function mate(uint tokenId1,uint tokenId2,uint tetheredToken) external{
        playerInfo storage player1 = players[tokenId1];
        playerInfo storage player2 = players[tokenId2];
        require(_exists(tokenId1) && _exists(tokenId2),"Invalid token IDs");
        require(ownerOf(tokenId1) == msg.sender &&
                ownerOf(tokenId2) == msg.sender
                );
        require(player1.isMale != player2.isMale,"Need two separate gender tokens to mate");
        require(block.timestamp - player1.lastMate >= 10 days &&
                block.timestamp - player2.lastMate >= 10 days,"Players need 10 day cool down after mating");
                
        PlayerPriceFeeds feed = PlayerPriceFeeds(registry.PriceFeedsContract());
        require(tetheredToken < feed.getFeedsCount(),"Invalid tethered token");
        _tokenId.increment();
        _safeMint(msg.sender,_tokenId.current());
        bool male;
        if(vrf()%2 == 0){
            male = true;
        }
        int basePrice = feed.getPriceFeed(tetheredToken);
        players[_tokenId.current()] = playerInfo(
                                                male,
                                                tetheredToken,
                                                basePrice,
                                                (block.timestamp),
                                                0
                                                );
        
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
        require(totalSales < TOTAL_SUPPLY,"No more tokens can be minted");
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
                                                0
                                                );
        _safeMint(msg.sender,_tokenId.current());
        totalSales += 1;
        return players[_tokenId.current()];
    }
    
    
}