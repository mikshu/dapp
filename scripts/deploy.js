const hre = require("hardhat");
async function main() {
  // We get the contract to deploy
  const Erc20TokenInst = await hre.ethers.getContractFactory("Token");
  const erc20Token = await Erc20TokenInst.deploy();

  await erc20Token.deployed();

  console.log("Token deployed to:", erc20Token.address);

   // We get the contract to deploy
  //  const Greeter = await hre.ethers.getContractFactory("Greeter");
  //  const greeter = await Greeter.deploy();
 
  //  await greeter.deployed();
 
  //  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });