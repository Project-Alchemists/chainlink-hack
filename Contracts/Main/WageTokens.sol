//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "./Registry.sol";
import "./PriceFeeds.sol";
import "./Player.sol";

contract WageToken is Ownable,ERC20Burnable{
    
    Registry registry;  
    Character player;
    
    mapping(uint=>uint) salaryRetrieved;
    event SalaryRetrieved(address indexed user,uint indexed tokenId,uint amount);
    
    uint public constant BASE_SALARY = 100;
    
    constructor(address regAddress,address playerAddress) ERC20("Wage Token","WGT"){
        registry = Registry(regAddress);
        player = Character(playerAddress);
    }
    
    function payWage(uint tokenId) external {
        require(player.ownerOf(tokenId) == msg.sender,"Only token owner can retrieve wage");
        require(block.timestamp - player.getPlayerInfo(tokenId).lastFed < 10 days,"You can't earn on an empty stomach");
        require(block.timestamp - player.getPlayerInfo(tokenId).birthDate > 60 days,"Kids don't get salaries");
        require(block.timestamp - salaryRetrieved[tokenId] > 30 days,"Salary is paid once every month");
        PlayerPriceFeeds feed = PlayerPriceFeeds(registry.PriceFeedsContract());
        int currentPrice = feed.getPriceFeed(player.getPlayerInfo(tokenId).tetheredToken);
        int basePrice = player.getPlayerInfo(tokenId).tokenBaseline;
        uint amount;
        if(player.getPlayerInfo(tokenId).birthDate - block.timestamp > 90 days){
            
            if (currentPrice > basePrice*3/2){
                amount = BASE_SALARY*6/10;
            }
            else if(currentPrice < 7*basePrice/10){
                amount = BASE_SALARY*4/10;
            }
            else{
               amount = BASE_SALARY/2;
            }
        }
        else{
            if (currentPrice > basePrice*3/2){
            amount = BASE_SALARY*12/10;
            }
            else if(currentPrice < 7*basePrice/10){
               amount = BASE_SALARY*8/10;
            }
            else{
                amount = BASE_SALARY;
            }
        }
        _mint(msg.sender,amount);
        salaryRetrieved[tokenId] = block.timestamp;
        emit SalaryRetrieved(msg.sender,tokenId,amount);
    }


}