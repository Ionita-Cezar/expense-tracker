import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})

export class BudgetComponent {
  weeklyBudget: number = 0;

  constructor(private router: Router) {}

  setBudget() {
    localStorage.setItem('weeklyBudget', this.weeklyBudget.toString());
    this.router.navigate(['/expenses']);
  }
}
