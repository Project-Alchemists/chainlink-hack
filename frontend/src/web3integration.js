import { Contract } from "@ethersproject/contracts";
import { addCharacter, updateCharacterInfo } from "moralisIntegration";

let playerContract, wagesContract, priceContract, registryContract;

export const connectContracts = (signer) => {
  const playerAbi = [
    "event playerBought(uint indexed tokenId,address indexed buyer,playerInfo Info)",
    "event playerBorn(uint indexed tokenId,address indexed buyer,playerInfo Info)",
    "event playerFed(uint indexed tokenId,address indexed owner,playerInfo Info)",
    "event playerHealed(uint indexed tokenId,address indexed owner,playerInfo Info)",
  ];

  const wageAbi = [
    "event SalaryRetrieved(address indexed user,uint indexed tokenId,uint amount)",
  ];

  //TODO - initialise ABIs for price and registry
  const priceAbi = [];
  const registryAbi = [];

  playerContract = new Contract(
    "0x7aa90577E2593eecEA526b1876B2ef7D093A7895",
    playerAbi,
    signer
  );
  wagesContract = new Contract(
    "0x2deeAD3fee7cd8a6Ff84805050Bd092c0d77C0d3",
    wageAbi,
    signer
  );
  priceContract = new Contract(
    "0x4CAE8115DcF3E44Be56e539951339B87A14e5e49",
    priceAbi,
    signer
  );
  registryContract = new Contract(
    "0xcd3a327D992DFDd19f5e8b4EA86d235C1E473661",
    registryAbi,
    signer
  );

  playerContract.on("playerBought", (tokenId, buyer, Info) => {
    addCharacter(Info.name, tokenId);
  });

  wagesContract.on("SalaryRetrieved", (user, tokenId, amount) => {
    updateCharacterInfo({ token: tokenId, lastSalary: new Date() });
  });
};

//TODO contract calls
