import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  Building2,
  LucideAngularModule,
  TrendingDown,
  TrendingUp,
  Users,
  Wrench,
} from 'lucide-angular';
import { DashboardServices } from '../../services/dashboard.services';
import { CurrencyPipe } from '@angular/common';
import { ShortNumberPipe } from '../../utils/short-number-pipe';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, CurrencyPipe, ShortNumberPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  constructor(
    private dashService: DashboardServices,
    private cdr: ChangeDetectorRef,
  ) {}

  readonly TrendingUp = TrendingUp;
  readonly TrendingDown = TrendingDown;

  protected readonly Wrench = Wrench;
  protected readonly Building2 = Building2;
  protected readonly Users = Users;

  budget: any;
  positiveBudget: any;

  ngOnInit(): void {
    this.dashService.getAnalytics().subscribe((analytics) => {
      console.log('ana', analytics);
      console.log('ana2', analytics.budget_overview);

      this.budget = analytics.budget_overview;
      this.positiveBudget = Number(this.budget.trend_percentage);
      console.log('budgett', this.budget.trend_percentage);

      this.cdr.detectChanges();
    });
  }
}
