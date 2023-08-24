//getTokenInfo.js
const MyToken = artifacts.require('MyToken');

module.exports = async function () {
  try {
    const networkId = await web3.eth.net.getId();
    console.log("Network ID:", networkId);

    const deployedNetwork = MyToken.networks[networkId];
    if (!deployedNetwork) {
      console.log("MyToken has not been deployed to detected network");
      return;
    }

    const tokenInstance = new web3.eth.Contract(MyToken.abi, deployedNetwork.address);

    const [name, symbol, totalSupply] = await Promise.all([
      tokenInstance.methods.name().call(),
      tokenInstance.methods.symbol().call(),
      tokenInstance.methods.totalSupply().call(),
    ]);

    console.log("Token Name:", name);
    console.log("Token Symbol:", symbol);
    console.log("Total Supply:", totalSupply.toString());
  } catch (error) {
    console.error("Error:", error);
  }
};
