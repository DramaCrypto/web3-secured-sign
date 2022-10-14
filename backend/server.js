const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const path = require('path');
const dotenv = require('dotenv');

var jwt = require('jsonwebtoken');
var ethSignUtil = require('eth-sig-util');
var ethereumjsUtil = require('ethereumjs-util');

const { initMongo } = require('./config/mongo.config');

const { User } = require('./model/user.model');

global.appRoot = path.resolve(__dirname);
const env_suffix = process.env.NODE_ENV || 'local';
dotenv.config({ path: path.join(appRoot, `.env${env_suffix ? '.' + env_suffix : ''}`) });

const app = express();
const port = process.env.SERVER_PORT || 3300;

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(bodyParser.json({ limit: '500mb', extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(flash());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const cronController = require('./controller/cron.controller');
const userController = require('./controller/user.controller');

app.post('/api/register', (req, res) => {
    let { address, signData, signature, email, name } = req.body;
    if (!address || !signature) {
        return res.status(400).send({ error: 'invalid params' })
    }
    address = address.trim().toLowerCase();
    const msgBufferHex = ethereumjsUtil.bufferToHex(Buffer.from(signData, 'utf8'));
    const signerAddress = ethSignUtil.recoverPersonalSignature({
        data: msgBufferHex,
        sig: signature,
    });
    if (address === signerAddress.toLowerCase()) {
        User.findOneAndUpdate({ address }, { email, name, address }, { upsert: true }, function (err, doc) {
            if (err) return res.status(500).send('DB Error')
        })
        var token = jwt.sign({ data: address }, 'assignment-jwt-rand', { expiresIn: '43200m' });
        return res
            .status(200)
            .send({ token: token });
    } else {
        return res
            .status(401)
            .send({ error: 'Signature verification failed' });
    }
})

app.get('/api/account', (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(token, 'assignment-jwt-rand', (err, payload) => {
        if (err) {
            return res.sendStatus(403)
        }

        let address = payload.data;

        User.findOne({ address: address })
            .then(user => {
                if (!user) return res.sendStatus(404);

                return res.json({ user })
            });

    })
})

app.get('/api/cron/fetchDepositEvents', (req, res) => {
    cronController.fetchDepositEvents().then(data => res.json({ "Fetched Deposit Events": data }));
});

app.get('/api/cron/deposit2Balance', (req, res) => {
    cronController.reflectDepositsToBalances().then(data => res.json({ "result": "success" }));
});

app.get('/api/user/scores', (req, res) => {
    userController.fetchUserScores(req.query.account).then(data => res.json({ "result": "success", data }));
});

app.get('/api/user/history', (req, res) => {
    userController.fetchDepositHistory(req.query.account).then(data => res.json({ "result": "success", data }));
});

app.get('/', (req, res) => {
    res.send(`<h1>GameHub Payment Api Ver 1.0.0</h1>`)
});

initMongo();

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})