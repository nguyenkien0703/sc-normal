//deploy sử dụng dụng exement token 


const hre = require("hardhat");
const { ethers } = hre;

const { getContracts, saveContract } = require("./utils");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const network = hre.network.name;

  const ExmentToken = await hre.ethers.getContractFactory("ExmentToken");
  const ext = await ExmentToken.deploy("Exment Token", "EXT");

  await ext.deployed(); // gọi constuctor

  console.log("ext address:", ext.address);
  await saveContract(network, "ext", ext.address);
  console.log(`Deployed ext to ${ext.address}`);

  console.log("Completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
