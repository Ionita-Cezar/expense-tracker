import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  days = ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
  budget: number = 0;

  constructor(public expenseService: ExpenseService) {}

  ngOnInit() {
    this.budget = this.expenseService.getWeeklyBudget();
  }

  setBudget(): void {
    localStorage.setItem('weeklyBudget', this.budget.toString());
  }
}
