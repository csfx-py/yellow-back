const router = require('express').Router();
const {getExpenses, getExpense, getMyActiveRepayments} = require('../utils/splitwise_api');

router.get('/expenses', async (req, res) => {
    const expenses = await getExpenses();
    res.status(200).json(expenses);
});

router.get('/active-expenses', async (req, res) => {
    const expenses = await getMyActiveRepayments();
    res.status(200).json(expenses);
});


module.exports = router