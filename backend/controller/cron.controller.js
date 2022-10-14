const cronService  = require('../service/cron.service');
const logger = require('../logger/api.logger');

class CronController {

    async fetchDepositEvents() {
        logger.info('CronController: fetchDepositEvents')
        return await cronService.fetchDepositEvents();
    }

    async reflectDepositsToBalances() {
        logger.info('CronController: reflectDepositsToBalances')
        return await cronService.reflectDepositsToBalances();
    }
}
module.exports = new CronController();
