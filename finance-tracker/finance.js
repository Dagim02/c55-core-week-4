const transactions = require('./data');

function addTransaction(transaction) {
  return [...transactions, transaction];
}

function getTotalIncome() {
  let total = 0;
  for (const tx of transactions) {
    if (tx.type === 'income') {
      total += tx.amount;
    }
  }
  return total;
}

function getTotalExpenses() {
  let total = 0;
  for (const tx of transactions) {
    if (tx.type === 'expense') {
      total += tx.amount;
    }
  }
  return total;
}

function getBalance() {
  return getTotalIncome() - getTotalExpenses();
}

function getTransactionsByCategory(category) {
  const filtered = [];
  for (const tx of transactions) {
    if (tx.category === category) {
      filtered.push(tx);
    }
  }
  return filtered;
}

function getLargestExpense() {
  let largest = { amount: 0, description: 'None' };

  for (const tx of transactions) {
    // Check if it is an expense AND if it's larger than our current record
    if (tx.type === 'expense' && tx.amount > largest.amount) {
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
