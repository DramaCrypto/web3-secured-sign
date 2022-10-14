const mongoose = require('mongoose');
const logger = require('../logger/api.logger');

const initMongo = () => {
    const url = process.env.MONGO_CONNECTION_STRING;
    logger.info("process.env.MONGO_CONNECTION_STRING :::" + process.env.MONGO_CONNECTION_STRING);

    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    mongoose.connection.once("open", async () => {
        logger.info("Connected to gamehub db");
    });

    mongoose.connection.on("error", (err) => {
        logger.error("Error connecting to gamehub db  ", err);
    });
}

const closeMongo = () => {
    if (!mongoose.connection) {
        return;
    }

    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Diconnected from gamehub db");
    });
}

module.exports = {
    initMongo,
    closeMongo
}
