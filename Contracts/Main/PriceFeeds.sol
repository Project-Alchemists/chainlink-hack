//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";


contract PlayerPriceFeeds is Ownable{
    
    AggregatorV3Interface[] internal priceFeed;
    
    constructor(){
        //BUSD
        priceFeed.push(AggregatorV3Interface(0xa0ABAcC3162430b67Aa6C135dfAA08E117A38bF0));
        //DAI
        priceFeed.push(AggregatorV3Interface(0x1FA508EB3Ac431f3a9e3958f2623358e07D50fe0));
        //DSLA
        priceFeed.push(AggregatorV3Interface(0x5f0423B1a6935dc5596e7A24d98532b67A0AeFd8));
        //ETH
        priceFeed.push(AggregatorV3Interface(0x4f11696cE92D78165E1F8A9a4192444087a45b64));
        //LINK
        priceFeed.push(AggregatorV3Interface(0xcd11Ac8C18f3423c7a9C9d5784B580079A75E69a));
        //ONE
        priceFeed.push(AggregatorV3Interface(0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD));
        //SUSHI
        priceFeed.push(AggregatorV3Interface(0x90142a6930ecF80F1d14943224C56CFe0CD0d347));
        //USDC
        priceFeed.push(AggregatorV3Interface(0x6F2bD4158F771E120d3692C45Eb482C16f067dec));
        //USDT
        priceFeed.push(AggregatorV3Interface(0x9A37E1abFC430B9f5E204CA9294809c1AF37F697));
        //WBTC
        priceFeed.push(AggregatorV3Interface(0xEF637736B220a58C661bfF4b71e03ca898DCC0Bd));
    }
    
    function addPriceFeed(address priceFeedAddress) external onlyOwner {
        priceFeed.push(AggregatorV3Interface(priceFeedAddress));
    }
    
    function modifyPriceFeed(uint index,address priceFeedAddress) external onlyOwner{
        require(index<priceFeed.length,"Invalid index");
        priceFeed[index] = AggregatorV3Interface(priceFeedAddress);
    }
    
    function getFeedsCount() external view returns(uint){
        return priceFeed.length;
    }
    function getPriceFeed(uint index) external view returns(int){
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed[index].latestRoundData();
        return price;
    }
        
}