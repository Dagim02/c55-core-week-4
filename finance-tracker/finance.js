const transactions = require('./data');

function addTransaction(transaction) {
  return [...transactions, transaction];
}

function getTotalIncome() {
  const total = transactions.reduce(
    (total, tx) => (tx.type === 'income' ? total + tx.amount : total),
    0,
  );

  return total;
}

function getTotalExpenses() {
  const total = transactions.reduce(
    (total, tx) => (tx.type === 'expense' ? total + tx.amount : total),
    0,
  );
  return total;
}

function getBalance() {
  return getTotalIncome() - getTotalExpenses();
}

function getTransactionsByCategory(category) {
  const getByCatagory = transactions.filter((tx) => tx.category === category);
  return getByCatagory;
}

function getLargestExpense() {
  const largest = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce(
      (max, tx) => (max === null || tx.amount > max.amount ? tx : max),
      null,
    );
  return largest;
}

function printAllTransactions() {
  transactions.forEach((tx, index) => {
    console.log(
      `${index + 1}. [${tx.type.toUpperCase()}] ${tx.description} - €${tx.amount} (${tx.category})`,
    );
  });
}

module.exports = {
  addTransaction,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getLargestExpense,
  printAllTransactions,
};
