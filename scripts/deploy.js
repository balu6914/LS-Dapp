// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the Staking contract
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(deployer.address);
  await staking.deployed();
  console.log("Staking contract deployed to:", staking.address);

  // Fetch the associated LiquidStakingToken contract address
  const liquidTokenAddress = await staking.token();
  console.log("LiquidStakingToken deployed to:", liquidTokenAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
