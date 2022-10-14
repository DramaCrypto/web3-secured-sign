const userRepository = require('../repository/user.repository');
const depositRepository = require('../repository/deposit.repository');

class UserService {

    constructor() { }

    /**
     * @notice Fetch user balance and game cores
     * @returns 
     */
    async fetchUserScores(account) {
        return await userRepository.fetchUserScores(account)
    }

    /**
     * @notice Fetch user deposit history
     * @returns 
     */
    async fetchDepositHistory(account) {
        return await depositRepository.fetchDepositHistory(account)
    }
}

module.exports = new UserService();
