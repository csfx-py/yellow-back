const splitwise = require('./splitwiseAPI');

const CURRENT_USER = "60131813";

const getExpenses = async () => {
    const expenses = await splitwise.getExpenses();
    console.log(expenses);
    console.log(expenses.length);
    return expenses;
};

const getMyActiveRepayments = async () => {
    const expenses = await splitwise.getExpenses();
    const activeExpenses = expenses.filter((expense) => {
        // check if expense.repayments array has object with from CURREN_USER
        const hasRepayment = expense.repayments.some((repayment) => {
            return repayment.from == CURRENT_USER;
        });
        return hasRepayment;
    });
    // console.log(activeExpenses);
    console.log(activeExpenses.length);
    return activeExpenses;
};

const getExpense = async (expense_id) => {
    const expense = await splitwise.getExpense(expense_id);
    console.log(expense);
    return expense;
}

module.exports = {
    getExpenses,
    getExpense,
    getMyActiveRepayments
};