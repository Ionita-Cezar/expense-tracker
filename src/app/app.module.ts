import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BudgetComponent } from './components/budget/budget.component';
import { DailyExpenseComponent } from './components/daily-expense/daily-expense.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AppComponent,
    BudgetComponent, 
    SummaryComponent,
    DailyExpenseComponent,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule
  ],
})
export class AppModule { }
