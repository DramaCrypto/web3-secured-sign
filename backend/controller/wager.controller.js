const wagerService = require('../service/wager.service');
const logger = require('../logger/api.logger');

class WagerController {

    async fetchSignature(matchID) {
        logger.info(`WagerController: fetchSignature: ${matchID}`)
        return await wagerService.fetchSignature(matchID);
    }
}
module.exports = new WagerController();
