// deploy Smc sử dụng market 

const hre = require("hardhat");
const { ethers } = hre;

const { getContracts, saveContract } = require("./utils");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const network = hre.network.name;

  const ExmentMarketPlace = await hre.ethers.getContractFactory("ExmentMarketPlace");
  const market = await ExmentMarketPlace.deploy();

  await market.deployed();

  console.log("market address:", market.address);
  await saveContract(network, "market", market.address);
  console.log(`Deployed market to ${market.address}`);

  console.log("Completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
