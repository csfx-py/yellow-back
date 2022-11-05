const Splitwise = require('splitwise');

const splitwise = Splitwise({
    consumerKey: process.env.SPLITWISE_CONSUMER_KEY,
    consumerSecret: process.env.SPLITWISE_CONSUMER_SECRET,
    // logger: console.log,
    // logLevel: 'error'
});

module.exports = splitwise;