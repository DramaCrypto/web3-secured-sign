const { DepositHistory } = require('../model/user.model');
const logger = require('../logger/api.logger');

class DepositRepository {

    constructor() { }

    async recordNewDeposits(depositEvents) {
        // Filter existing records (have event_id) from deposit history table 
        const eventIds = depositEvents.map((evt) => evt.event_id)
        const existingRecords = await DepositHistory.find({ event_id: { "$in": eventIds } }, "event_id");

        // Add new events only (event_id does not exist in deposit history table)
        const existingIds = existingRecords.map((record) => record.event_id)
        const newEvents = depositEvents.filter((evt) => existingIds.indexOf(evt.event_id) === -1);

        await new Promise((resolve, reject) => {
            DepositHistory.insertMany(newEvents, (err) => {
                if (err) {
                    logger.error(`DepositRepository::recordNewDeposits::Error:: ${err}`);
                    reject(err)
                } else {
                    resolve(true);
                }
            })
        })

        // Return last block number from new deposit events, and new events count
        return { lastBlockNumber: depositEvents[0].block_number, addedEventsCount: newEvents.length }
    }

    async fetchUnusedDeposits() {
        return await DepositHistory.find({ used: false });
    }

    async markDepositRecordAsUsed(depositRecord) {
        await DepositHistory.updateOne({ _id: depositRecord._id }, { used: true });
    }

    async fetchDepositHistory(account) {
        return await DepositHistory.find({ account });
    }
}

module.exports = new DepositRepository();
