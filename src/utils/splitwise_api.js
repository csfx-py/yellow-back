const UPI = require("../Models/UPI");
const splitwise = require("./splitwiseAPI");

const CURRENT_USER = "60143657";

const getExpenses = async () => {
  const expenses = await splitwise.getExpenses();
  const expensesWithMappedNames = expenses.map((expense) => {
    expense.repayments = expense.repayments.map((repayment) => {
      repayment.fromUser = expense.users.find(
        (user) => user.user.id == repayment.from
      );
      repayment.toUser = expense.users.find(
        (user) => user.user.id == repayment.to
      );
      return repayment;
    });
    return expense;
  });
  return expenses;
};

const getMyActiveRepayments = async () => {
  const expenses = await splitwise.getExpenses();
  console.log(expenses[0].repayments);
  const activeExpenses = expenses.filter((expense) => {
    // check if expense.repayments array has object with from CURREN_USER
    const hasRepayment = expense.repayments.some((repayment) => {
      return repayment.from == CURRENT_USER;
    });
    return hasRepayment;
  });
  //   console.log(activeExpenses);
  const expensesWithMappedNames = activeExpenses.map((expense) => {
    expense.repayments = expense.repayments.map((repayment) => {
      repayment.fromUser = expense.users.find(
        (user) => user.user.id == repayment.from
      );
      repayment.toUser = expense.users.find(
        (user) => user.user.id == repayment.to
      );
      return repayment;
    });
    return expense;
  });
  return expensesWithMappedNames;
};

const getExpenseFromID = async (expense_id) => {
  const expenses = await splitwise.getExpenses();
  const expense = expenses.find((expense) => expense.id == expense_id);
  expense.repayments = expense.repayments.filter((repayment) => {
    return repayment.from == CURRENT_USER;
  });
  upi = await UPI.findOne({
    splitwiseId: expense.repayments[0].to,
  });
  expense.repayments[0].toUpi = upi?.upiId || "";
  expense.repayments[0].toUser = expense.users.find(
    (user) => user.user.id == expense.repayments[0].to
  );
  expense.repayments[0].fromUser = expense.users.find(
    (user) => user.user.id == expense.repayments[0].from
  );
  
  return expense;
};

module.exports = {
  getExpenses,
  getExpenseFromID,
  getMyActiveRepayments,
};
