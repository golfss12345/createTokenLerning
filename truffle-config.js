//truffle-config.js
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const MNEMONIC = "fetch economy ramp betray drill tomato surface soccer brother beef immune sight";
const INFURA_URL = 'https://goerli.infura.io/v3/86554121252e43ccb74ae8791c403de8'; // เปลี่ยนเป็น Mainnet URL ที่คุณใช้

module.exports = {
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_URL),
      network_id: 5, // Goerli Testnet network id
      gasPrice: 20000000000, // Adjust the gas price as needed
    },
    // ... other network configurations
  },
  // ... other Truffle configurations
};
