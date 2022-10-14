const Moralis = require('moralis/node');
const logger = require('../logger/api.logger');

const initMoralis = async () => {
    const serverUrl = process.env.MORALIS_SERVER_URL
    const appId = process.env.MORALIS_APP_ID
    const masterKey = process.env.MORALIS_MASTER_KEY

    try {
        await Moralis.start({ serverUrl, appId, masterKey })
        logger.info("Moralis started");
    } catch (err) {
        logger.error("Error starting Moralis ", err);
    }
}

module.exports = {
    initMoralis
}
