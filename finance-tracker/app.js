const chalk = require('chalk');
const {
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getLargestExpense,
  printAllTransactions,
} = require('./finance');

// HEADER
console.log(chalk.bold('\n💰 PERSONAL FINANCE TRACKER 💰'));

// ALL TRANSACTIONS
console.log('\nAll Transactions:');
printAllTransactions();

// SUMMARY HEADER
console.log(chalk.bold('\n📊 FINANCIAL SUMMARY 📊'));

const income = getTotalIncome();
const expenses = getTotalExpenses();
const balance = getBalance();

console.log(`Total Income: ${chalk.green('€' + income)}`);
console.log(`Total Expenses: ${chalk.red('€' + expenses)}`);

// Balance color logic
const balanceColor = balance >= 0 ? chalk.cyan : chalk.red;
console.log(`Current Balance: ${balanceColor('€' + balance)}`);

// LARGEST EXPENSE & COUNT
const largest = getLargestExpense();
console.log(
  `\nLargest Expense: ${chalk.yellow(largest.description)} (${chalk.red('€' + largest.amount)})`,
);
// Use the .length property of the transactions array we imported
const transactions = require('./data');
console.log(`Total Transactions: ${transactions.length}\n`);
