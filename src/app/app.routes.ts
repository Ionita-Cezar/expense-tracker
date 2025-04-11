import { Routes } from '@angular/router';
import { DailyExpenseComponent } from './components/daily-expense/daily-expense.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'expenses/:day', component: DailyExpenseComponent },
      { path: 'summary', component: SummaryComponent },
      { path: '', redirectTo: 'expenses/MON', pathMatch: 'full' }
    ],
  },
];
