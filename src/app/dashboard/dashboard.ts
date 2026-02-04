import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface InfraItem {
  icon: string;
  count: number;
  label: string;
}

interface ResourceUsage {
  label: string;
  used: number;
  total: number;
  unit: string;
  percentage: number;
  color: string;
}

interface StorageItem {
  label: string;
  used: number;
  total: number;
  unit: string;
  percentage: number;
}

interface NetworkItem {
  label: string;
  allocated: number;
  total: number;
  percentage: number;
}

interface Alert {
  time: string;
  type: string;
  message: string;
}

interface Event {
  time: string;
  action: string;
  user: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  infraItems: InfraItem[] = [
    { icon: 'router', count: 3, label: 'Virtual Routers' },
    { icon: 'memory', count: 6, label: 'System VMs' },
    { icon: 'settings_ethernet', count: 6, label: 'Virtual Routers' },
    { icon: 'cloud', count: 17, label: 'Instances' },
  ];

  computeResources: ResourceUsage[] = [
    { label: 'CPU cores', used: 26, total: 20, unit: '', percentage: 130, color: '#ff9800' },
    { label: 'GPU', used: 2, total: 100, unit: '', percentage: 2, color: '#4caf50' },
  ];

  storageItems: StorageItem[] = [
    { label: 'Secondary Storage', used: 0.0, total: 0.0, unit: 'GiB', percentage: 0 },
    { label: 'Backup Storage', used: 48.0, total: 60.0, unit: 'GiB', percentage: 80 },
  ];

  networkItems: NetworkItem[] = [
    { label: 'VLAN/VNI', allocated: 4, total: 1102, percentage: 0.36 },
    { label: 'Public IP addresses', allocated: 9, total: 190, percentage: 4.74 },
    { label: 'Shared Network IPs', allocated: 14, total: 594, percentage: 2.36 },
    { label: 'Management IP addresses', allocated: 4, total: 253, percentage: 1.58 },
  ];

  alerts: Alert[] = [
    {
      time: '04 Feb 2026 12:44:54',
      type: 'ALERT.SERVICE.SSVM',
      message:
        'Secondary Storage Vm creation failure in zone [IN-BLR1 Basic Zone x86]. Error details: null',
    },
    {
      time: '04 Feb 2026 12:44:25',
      type: 'ALERT.SERVICE.CONSOLEPROXY',
      message: 'Console proxy creation failure. Zone [IN-BLR1 Basic Zone x86]. Error details: null',
    },
    {
      time: '04 Feb 2026 12:44:23',
      type: 'ALERT.SERVICE.SSVM',
      message:
        'Secondary Storage Vm creation failure in zone [IN-BLR1 Basic Zone x86]. Error details: null',
    },
  ];

  events: Event[] = [
    {
      time: '04 Feb 2026 12:44:44',
      action: 'USER.LOGIN',
      user: 'admin',
      description: '(admin) user has logged in from IP Address /87.121.0.37',
      icon: 'person',
    },
    {
      time: '04 Feb 2026 12:44:44',
      action: 'USER.LOGOUT',
      user: 'admin',
      description: '(admin) user has logged out',
      icon: 'person',
    },
    {
      time: '04 Feb 2026 12:44:49',
      action: 'VOLUME.CREATE',
      user: 'ROOT-2774',
      description:
        '(system) Successfully created entity for creating ROOT volume. Volume Type: ROOTVolume Id: 4f17be66-e48e-4b87-8d3d-e94887761b68 Vm Id: a5d2356e-477d-4b1e-bb15-bf36b23b101d',
      icon: 'inventory_2',
    },
  ];
}
