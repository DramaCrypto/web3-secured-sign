const { soliditySha3 } = require("web3-utils");
const { getWeb3 } = require('../config/web3.config');
const wagerRepository = require('../repository/wager.repository');

class WagerService {

    constructor() { }

    /**
     * @notice Fetch match data from the matchID
     * @returns 
     */
    async fetchSignature(matchID) {
        const web3 = getWeb3();
        const winner = await wagerRepository.fetchWinner(matchID);
        const message = soliditySha3(matchID, winner);
        const signature = web3.eth.accounts.sign(message, process.env.SIGNER_PRIVATE_KEY);
        return { matchID, winner, signature: signature.signature }
    }
}

module.exports = new WagerService();
