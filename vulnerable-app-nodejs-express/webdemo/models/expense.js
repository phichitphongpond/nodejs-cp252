/**
 * Represents an expense record.
 * @class
 */
class Expense {

  /**
   * Create a new Expense
   * @constructor
   * @param {Date} date - The date of the transaction.
   * @param {number} income - Income amount.
   * @param {number} expense - Expense amount.
   * @param {string} detail - Description of the transaction.
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}


/**
 * Model class for managing expense records.
 * @class
 */
class ExpenseModel {

  /**
   * Create a new ExpenseModel
   * @constructor
   */
  constructor() {
    /**
     * Array of expense records
     * @type {Expense[]}
     */
    this.expenses = [];
  }

  /**
   * Add an expense object to the list
   * @param {Expense} expense - Expense object to add
   * @returns {void}
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Get all expense records
   * @returns {Expense[]} Array of expenses
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate total income
   * @returns {number} Total income amount
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate total expense
   * @returns {number} Total expense amount
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate remaining balance
   * @returns {number} Remaining money (income - expense)
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };