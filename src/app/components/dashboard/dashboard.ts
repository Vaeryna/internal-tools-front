import { Component } from '@angular/core';
import {
  Building2,
  LucideAngularModule,
  TrendingDown,
  TrendingUp,
  Users,
  Wrench,
} from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly TrendingUp = TrendingUp;
  readonly TrendingDown = TrendingDown;
  protected positivBudget: boolean = true;
  protected readonly Wrench = Wrench;
  protected readonly Building2 = Building2;
  protected readonly Users = Users;
}
//
