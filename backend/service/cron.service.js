const cronRepository = require('../repository/cron.repository');
const depositRepository = require('../repository/deposit.repository');
const settingRepository = require('../repository/setting.repository');
const userRepository = require('../repository/user.repository');

class CronService {

    constructor() { }

    /**
     * @notice Fetch deposit events synced with payment gateway contract
     * @returns 
     */
    async fetchDepositEvents() {
        const lastFetchedBlock = await settingRepository.getLastFetchedBlock()
        const newDepositEvents = await cronRepository.fetchDepositEvents(lastFetchedBlock);
        let newEventCount = newDepositEvents.length;
        if (newDepositEvents.length > 0) {
            const { lastBlockNumber, addedEventsCount } = await depositRepository.recordNewDeposits(newDepositEvents);
            newEventCount = addedEventsCount;
            // Last block number is saved, so that we grab new deposits after this block number
            if (lastFetchedBlock !== lastBlockNumber) {
                await settingRepository.updateLastFetchedBlock(Math.max(lastFetchedBlock, lastBlockNumber));
            }
        }

        return newEventCount;
    }

    /**
     * @notice Update user balances from deposited funds
     */
    async reflectDepositsToBalances() {
        const unusedDepositRecords = await depositRepository.fetchUnusedDeposits();
        const numRecords = unusedDepositRecords.length;
        for (let i = 0; i < numRecords; i++) {
            const flag = await userRepository.reflectUserBalance(unusedDepositRecords[i]);
            // If the deposit amount added to user CREDS, make it as used
            if (flag) {
                await depositRepository.markDepositRecordAsUsed(unusedDepositRecords[i]);
            }
        }
    }
}

module.exports = new CronService();
