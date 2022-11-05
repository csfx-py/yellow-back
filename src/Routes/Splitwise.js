const router = require("express").Router();
const {
  getExpenses,
  getMyActiveRepayments,
  getExpenseFromID,
} = require("../utils/splitwise_api");

router.get("/expenses", async (req, res) => {
  const expenses = await getExpenses();
  res.status(200).json(expenses);
});

router.get("/active-expenses", async (req, res) => {
  const expenses = await getMyActiveRepayments();
  res.status(200).json(expenses);
});

router.get("/expense/:id", async (req, res) => {
  const expense = await getExpenseFromID(req.params.id);
  res.status(200).json(expense);
});

module.exports = router;
