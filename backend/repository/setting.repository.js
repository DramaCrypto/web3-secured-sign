const logger = require('../logger/api.logger');
const { Setting } = require('../model/setting.model');

class SettingRepository {

    constructor() { }

    async getLastFetchedBlock() {
        const setting = await Setting.findOne({});
        if (!setting) {
            return 0;
        }
        return setting.lastFetchedBlock
    }

    async updateLastFetchedBlock(lastFetchedBlock) {
        try {
            await Setting.updateOne({}, { $set: { lastFetchedBlock } }, { upsert: true })
        } catch (err) {
            logger.error(`SettingRepository::updateLastFetchedBlock::Error:: ${err}`)
        }
    }
}

module.exports = new SettingRepository();
