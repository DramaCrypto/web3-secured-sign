const Web3 = require("web3");

const getWeb3 = () => {
    return (web3 = new Web3(
        new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161") // ganache-cli address
    ));
}

module.exports = {
    getWeb3
}
