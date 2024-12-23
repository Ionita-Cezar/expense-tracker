import { Component } from '@angular/core';
import { BudgetComponent } from './components/budget/budget.component';
import { DailyExpenseComponent } from './components/daily-expense/daily-expense.component';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BudgetComponent, DailyExpenseComponent, SummaryComponent],
  template: `
    <app-budget></app-budget>
    <app-daily-expense></app-daily-expense>
    <app-summary></app-summary>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
