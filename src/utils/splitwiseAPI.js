const Splitwise = require('splitwise');

const splitwise = Splitwise({
    consumerKey: process.env.SPLITWISE_CONSUMER_KEY,
    consumerSecret: process.env.SPLITWISE_CONSUMER_SECRET,
    accessToken: process.env.SPLITWISE_ACCESS_TOKEN,
    logger: console.log,
    logLevel: 'error'
});

module.exports = splitwise;