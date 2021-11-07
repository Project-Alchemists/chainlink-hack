//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract Registry is Ownable{
    
    address public PriceFeedsContract;
    
    constructor(address priceFeeds) {
        PriceFeedsContract = priceFeeds;
    }
    
    function modifyPriceFeeds(address priceFeeds) external onlyOwner {
        PriceFeedsContract = priceFeeds;
    }
}