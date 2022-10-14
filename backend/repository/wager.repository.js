const Moralis = require('moralis/node');
const logger = require('../logger/api.logger');

class WagerRepository {

    constructor() { }

    async fetchWinner(matchID) {
        try {
            const query = new Moralis.Query('FightersDatabase');
            query.equalTo('Match_ID', matchID);
            const matchRecord = await query.first();
            if (matchRecord) {
                return matchRecord.get('Match_Result');
            }
        } catch (err) {
            logger.error(`WagerRepository::fetchWinner::Error ${err}`)
        }

        return '';
    } 
}

module.exports = new WagerRepository();
