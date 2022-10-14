const Moralis = require('moralis/node');
const logger = require('../logger/api.logger');

class UserRepository {

    constructor() { }

    async reflectUserBalance(depositRecord) {
        try {
            const query = new Moralis.Query('ScoresData');
            query.equalTo('ethAddress', depositRecord.account);
            const userRecord = await query.first();
            if (userRecord) {
                userRecord.set('CREDS', (Number(userRecord.get('CREDS')) + depositRecord.coin_amount) + '');
                await userRecord.save();
                logger.info(`${depositRecord.account} balance updated:: ${userRecord.get('CREDS')} + ${depositRecord.coin_amount} = ${Number(userRecord.get('CREDS')) + depositRecord.coin_amount}`);
                return true;
            }
        } catch (err) {
            logger.error(`UserRepository::reflectUserBalance::Error ${err}`)
        }

        return false;
    }

    async fetchUserScores(account) {
        try {
            const query = new Moralis.Query('ScoresData');
            query.equalTo('ethAddress', account);
            const userRecord = await query.first();
            if (userRecord) {
                return {
                    coinBalance: userRecord.get('CREDS'),
                    games: {
                        defensescore: userRecord.get('ScoreEarthDefense'),
                        flappyscore: userRecord.get('ScoreFlappy'),
                        chasescore: userRecord.get('ScoreCopChaser'),
                        arrowscore: userRecord.get('ScoreArrow'),
                        pacmanscore: userRecord.get('ScorePacMan'),
                        stackscore: userRecord.get('ScoreStack'),
                        spacescore: userRecord.get('ScoreSpaceInvader'),
                        // hoverscore: userRecord.get('hoverscore'),
                        // fruitscore: userRecord.get('fruitscore')
                    }
                };
            }
        } catch (err) {
            logger.error(`UserRepository::fetchUserScores::Error ${err}`)
        }

        return { coinBalance: 0, games: {} };
    }
}

module.exports = new UserRepository();
