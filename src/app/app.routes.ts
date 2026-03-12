import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Tools } from './components/tools/tools';
import { Analytics } from './components/analytics/analytics';
import { Settings } from './components/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    data: { activePath: 'dashboard' },
  },
  { path: 'tools', component: Tools, data: { activePath: 'tools' } },
  { path: 'analytics', component: Analytics, data: { activePath: 'analytics' } },
  { path: 'settings', component: Settings, data: { activePath: 'settings' } },
];
