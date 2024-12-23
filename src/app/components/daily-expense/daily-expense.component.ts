import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-expense',
  templateUrl: './daily-expense.component.html',
  styleUrls: ['./daily-expense.component.css'],
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, CommonModule],
})
export class DailyExpenseComponent {
  days = ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
  currentDay = 'MON';
  viewingSummary = false;

  category: string = '';
  amount: number | null = null;

  constructor(public expenseService: ExpenseService) {}

  setCurrentDay(index: number): void {
    this.currentDay = this.days[index];
    this.viewingSummary = false;
  }

  viewSummary(): void {
    this.viewingSummary = true;
  }

  addExpense(): void {
    if (this.category && this.amount !== null) {
      this.expenseService.addExpense(this.currentDay, {
        category: this.category,
        amount: this.amount
      });
      this.category = '';
      this.amount = null;
    }
  }

  editExpense(index: number): void {
    const expense = this.expenseService.getExpenses(this.currentDay)[index];
    this.category = expense.category;
    this.amount = expense.amount;
    this.deleteExpense(index);
  }

  deleteExpense(index: number): void {
    this.expenseService.deleteExpense(this.currentDay, index);
  }
}
