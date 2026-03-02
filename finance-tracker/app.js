const chalk = require('chalk');
const transactions = require('./data');

const {
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getLargestExpense,
  printAllTransactions,
} = require('./finance');

// Header
console.log(chalk.bold('\n💰 PERSONAL FINANCE TRACKER 💰'));

// All transactions
console.log('\nAll Transactions:');
printAllTransactions();

// Summary header
console.log(chalk.bold('\n📊 FINANCIAL SUMMARY 📊'));

const income = getTotalIncome();
const expenses = getTotalExpenses();
const balance = getBalance();

console.log(`Total Income: ${chalk.green('€' + income)}`);
console.log(`Total Expenses: ${chalk.red('€' + expenses)}`);

// Balance color logic
const balanceColor = balance >= 0 ? chalk.cyan : chalk.red;
console.log(`Current Balance: ${balanceColor('€' + balance)}`);

// largest expenses and total
const largest = getLargestExpense();
console.log(
  `\nLargerst Expenses: ${chalk.yellow(largest.description)} (${chalk.red('€' + largest.amount)})`,
);

console.log(`Total Transactions: ${transactions.length}\n`);
