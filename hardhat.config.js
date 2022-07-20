/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/234f96ba41cb4f45a7e2dadf3fd214b8",
    //   accounts: [
    //     "a1022149e70e877fe04b6d034865e68307a169921ae18ddde4a3756414a77ef5",
    //   ],
    // },
  },
};
