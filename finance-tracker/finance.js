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
  let largest = null;
  for (const tx of transactions) {
    if (
      tx.type === 'expense' &&
      (largest === null || tx.amount > largest.amount)
    ) {
      largest = tx;
    }
  }

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
