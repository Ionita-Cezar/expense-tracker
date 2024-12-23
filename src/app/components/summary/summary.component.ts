import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SummaryComponent {
  @Input() total = 0;
  @Input() savings = 0;
  @Input() categorySummary: { [category: string]: number } = {};

  getCategories(): string[] {
    return Object.keys(this.categorySummary);
  }
}
