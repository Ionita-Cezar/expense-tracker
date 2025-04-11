import { Component } from '@angular/core';
import { BudgetComponent } from './components/budget/budget.component';
import { DailyExpenseComponent } from './components/daily-expense/daily-expense.component';
import { SummaryComponent } from './components/summary/summary.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
