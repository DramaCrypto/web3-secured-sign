const Moralis = require('moralis/node');
const logger = require('../logger/api.logger');

class CronRepository {

    constructor() { }

    /**
     * @notice Fetch deposit events from moralis table
     * @param {number} fromBlock block number to fetch from deposit events table in moralis
     * @returns 
     */
    async fetchDepositEvents(fromBlock) {
        try {
            const DepositEvents = Moralis.Object.extend("DepositEvents");
            const query = new Moralis.Query(DepositEvents);
            query.greaterThanOrEqualTo("block_number", fromBlock);
            query.descending('block_number');
            query.select("block_hash", "block_number", "block_timestamp", "account", "payToken", "payAmount", "gameCoinAmount");
            const results = await query.find();
            logger.info(`CronRepository::fetchDepositEvents:: ${results.length} events since block ${fromBlock}`);
            return results.map((result) => ({
                event_id: result.id,
                account: result.get('account'),
                block_hash: result.get('block_hash'),
                block_number: result.get('block_number'),
                block_timestamp: Math.floor(new Date(result.get('block_timestamp')).getTime() / 1000) + '',
                pay_token: result.get('payToken'),
                token_amount: result.get('payAmount'),
                coin_amount: Number(result.get('gameCoinAmount'))
            }));
        } catch (err) {
            logger.error(`CronRepository::fetchDepositEvents:: Error ${err}`)
            return []
        }
    }
}

module.exports = new CronRepository();
