//TODO - import ethers, provider,signer,contract

let playerAbi = ["event playerBought(uint indexed tokenId,address indexed buyer,playerInfo Info)",
"event playerBorn(uint indexed tokenId,address indexed buyer,playerInfo Info)",
"event playerFed(uint indexed tokenId,address indexed owner,playerInfo Info)",
"event playerHealed(uint indexed tokenId,address indexed owner,playerInfo Info)"
]
//Create contract object
playerContract.on('playerBought',(tokenId,buyer,Info)=>console.log("Event received"));
//Similarly for all 4 events

//_____________________________________//
let wageAbi = ["event SalaryRetrieved(address indexed user,uint indexed tokenId,uint amount)"]

wageContract.on('SalaryRetrieved',(user,tokenId,amount)=>console.log("Event received"));

