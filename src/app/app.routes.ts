import { Routes } from '@angular/router';
import { Backups } from './components/backups/backups';
import { Dashboard } from './components/dashboard/dashboard';
import { GuestNetworks } from './components/guest-networks/guest-networks';
import { InstanceSnapshots } from './components/instance-snapshots/instance-snapshots';
import { Instances } from './components/instances/instances';
import { Kubernetes } from './components/kubernetes/kubernetes';
import { VolumeSnapshots } from './components/volume-snapshots/volume-snapshots';
import { Volumes } from './components/volumes/volumes';


export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'compute/instances', component: Instances },
  { path: 'compute/snapshots', component: InstanceSnapshots },
  { path: 'compute/kubernetes', component: Kubernetes },
  { path: 'storage/volumes', component: Volumes },
  { path: 'storage/backups', component: Backups },
  { path: 'storage/volume-snapshots', component: VolumeSnapshots },
  { path: 'network/guest-networks', component: GuestNetworks },

  { path: '**', redirectTo: '' },
];
