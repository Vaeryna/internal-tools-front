import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Tools } from './components/tools/tools';
import { Analytics } from './components/analytics/analytics';
import { Settings } from './components/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  { path: 'tools', component: Tools },
  { path: 'analytics', component: Analytics },
  { path: 'settings', component: Settings },
];
