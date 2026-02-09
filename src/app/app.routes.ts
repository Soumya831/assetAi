import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Instances } from './instances/instances';
import { InstanceSnapshots } from './instance-snapshots/instance-snapshots';
import { Kubernetes } from './kubernetes/kubernetes';
import { Volumes } from './volumes/volumes';
import { GuestNetworks } from './guest-networks/guest-networks';
import { Backups } from './backups/backups';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'compute/instances', component: Instances },
  { path: 'compute/snapshots', component: InstanceSnapshots },
  { path: 'compute/kubernetes', component: Kubernetes },
  { path: 'storage/volumes', component: Volumes },
  { path: 'storage/backups', component: Backups },
  { path: 'network/guest-networks', component: GuestNetworks },

  { path: '**', redirectTo: '' },
];
