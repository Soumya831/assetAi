import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Instances } from './instances/instances';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'compute/instances', component: Instances },
  { path: '**', redirectTo: '' },
];
