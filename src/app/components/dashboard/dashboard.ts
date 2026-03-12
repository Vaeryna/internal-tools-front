import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Building2, LucideAngularModule, TrendingUp, Users, Wrench } from 'lucide-angular';
import { DashboardServices } from '../../services/dashboard.services';
import { CurrencyPipe } from '@angular/common';
import { ShortNumberPipe } from '../../utils/short-number-pipe';
import { ToolsService } from '../../services/tools.service';
import { RecentToolsTab } from '../recent-tools-tab/recent-tools-tab';
import { Tool } from '../../models/Tool.models';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, CurrencyPipe, ShortNumberPipe, RecentToolsTab],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  constructor(
    private dashService: DashboardServices,
    private toolService: ToolsService,
    private cdr: ChangeDetectorRef,
  ) {}

  readonly TrendingUp = TrendingUp;
  protected readonly Wrench = Wrench;
  protected readonly Building2 = Building2;
  protected readonly Users = Users;

  budget: any;
  trendBudget: any;
  activeTools: any;
  trendTools: any;
  departments: any;
  trendDepartment: any;
  costPerUser: any;
  trendCostPerUser: number = 0;
  recentTool: Tool[] = [];

  ngOnInit(): void {
    this.dashService.getAnalytics().subscribe((analytics) => {
      this.budget = analytics.budget_overview;
      this.trendBudget = this.budget.trend_percentage;
      this.trendTools = analytics.kpi_trends.tools_change;
      this.trendDepartment = analytics.kpi_trends.departments_change;
      this.costPerUser = analytics.cost_analytics.cost_per_user;
      this.trendCostPerUser = analytics.kpi_trends.cost_per_user_change;

      this.cdr.detectChanges();
    });

    this.toolService.getTools({ status: 'active' }).subscribe((tools) => {
      this.activeTools = tools.length;
      this.cdr.detectChanges();
    });

    this.toolService
      .getTools({ _sort: 'updated_at', _order: 'desc', _limit: 8 })
      .subscribe((tools) => {
        this.recentTool = tools;
        this.cdr.detectChanges();
      });

    this.dashService.getTotalDepartment().subscribe((departments) => {
      this.departments = departments.length;
      this.cdr.detectChanges();
    });
  }
}
