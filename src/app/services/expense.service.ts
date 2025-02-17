import { Injectable } from '@angular/core';

export interface Expense {
  category: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: { [day: string]: Expense[] } = {};

  addExpense(day: string, expense: Expense) {
    if (!this.expenses[day]) this.expenses[day] = [];
    this.expenses[day].push(expense);
  }

  getExpenses(day: string): Expense[] {
    return this.expenses[day] || [];
  }

  deleteExpense(day: string, index: number) {
    if (this.expenses[day]) {
      this.expenses[day].splice(index, 1);
    }
  }

  getTotal(day: string): number {
    return this.getExpenses(day).reduce((sum, e) => sum + e.amount, 0);
  }

  getWeeklyTotal(): number {
    return Object.values(this.expenses)
      .flat()
      .reduce((sum, e) => sum + e.amount, 0);
  }

  getWeeklyBudget(): number {
    const budget = localStorage.getItem('weeklyBudget');
    return budget ? parseInt(budget, 10) : 0;
  }

  getWeeklySavings(): number {
    return this.getWeeklyBudget() - this.getWeeklyTotal();
  }

  getSummaryByCategory() {
    const categorySummary: { [category: string]: number } = {};
    Object.values(this.expenses)
      .flat()
      .forEach((expense) => {
        categorySummary[expense.category] =
          (categorySummary[expense.category] || 0) + expense.amount;
      });
    return categorySummary;
  }
}
