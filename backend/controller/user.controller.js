const userService  = require('../service/user.service');
const logger = require('../logger/api.logger');

class UserController {

    async fetchUserScores(account) {
        logger.info(`UserController: fetchUserScores: ${account}`)
        return await userService.fetchUserScores(account);
    }

    async fetchDepositHistory(account) {
        logger.info(`UserController: fetchDepositHistory: ${account}`)
        return await userService.fetchDepositHistory(account);
    }
}
module.exports = new UserController();
