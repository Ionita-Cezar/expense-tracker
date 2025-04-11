import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

enum Days {
  MON = 'MON',
  TUES = 'TUES',
  WED = 'WED',
  THUR = 'THUR',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN',
}

@Component({
  selector: 'app-daily-expense',
  templateUrl: './daily-expense.component.html',
  styleUrls: ['./daily-expense.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, CommonModule, RouterModule],
})
export class DailyExpenseComponent {
  days = Object.values(Days);
  currentDay: Days = Days.MON;

  category: string = '';
  amount: number | null = null;

  constructor(private route: ActivatedRoute, public expenseService: ExpenseService) {
    this.route.params.subscribe(params => {
      const day = params['day']?.toUpperCase();
      if (Object.values(Days).includes(day)) {
        this.currentDay = day as Days;
      }
    });
  }

  setCurrentDay(index: number): void {
    this.currentDay = this.days[index] as Days;
  }

  addExpense(): void {
    if (this.category && this.amount !== null) {
      this.expenseService.addExpense(this.currentDay, {
        category: this.category,
        amount: this.amount,
      });
      this.category = '';
      this.amount = null;
    }
  }

  editingIndex: number | null = null;
  editedCategory: string = '';
  editedAmount: number | null = null;

  startEditing(index: number): void {
    const expense = this.expenseService.getExpenses(this.currentDay)[index];
    this.editingIndex = index;
    this.editedCategory = expense.category;
    this.editedAmount = expense.amount;
  }

  saveEdit(): void {
    if (
      this.editingIndex !== null &&
      this.editedCategory &&
      this.editedAmount !== null
    ) {
      this.expenseService.updateExpense(this.currentDay, this.editingIndex, {
        category: this.editedCategory,
        amount: this.editedAmount,
      });
      this.editingIndex = null;
      this.editedCategory = '';
      this.editedAmount = null;
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
  }

  deleteExpense(index: number): void {
    this.expenseService.deleteExpense(this.currentDay, index);
  }
}
