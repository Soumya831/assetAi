import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Backup {
  id: string;
  name: string;
  status: 'BackedUp';
  size: string;
  virtualSize: string;
  instanceName: string;
  backupOfferingName: string;
  intervalType: string;
  type: string;
  created: string;
  account: string;
  domain: string;
  zone: string;
}

@Component({
  selector: 'app-backups',
  imports: [CommonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './backups.html',
  styleUrl: './backups.scss',
})
export class Backups {
 backups: Backup[] = [
    {
      id: '1',
      name: 'test-admin-vm',
      status: 'BackedUp',
      size: '0.00 GiB',
      virtualSize: '0.00 GiB',
      instanceName: 'test-admin-vm',
      backupOfferingName: 'Gold Backup',
      intervalType: 'MANUAL',
      type: 'FULL',
      created: '10 Aug 2023 00:00:00',
      account: 'admin',
      domain: 'ROOT',
      zone: 'CS-SIM1 Adv Zone x86'
    },
    {
      id: '2',
      name: 'test-admin-vm',
      status: 'BackedUp',
      size: '0.00 GiB',
      virtualSize: '0.00 GiB',
      instanceName: 'test-admin-vm',
      backupOfferingName: 'Gold Backup',
      intervalType: 'MANUAL',
      type: 'FULL',
      created: '10 Aug 2023 00:00:00',
      account: 'admin',
      domain: 'ROOT',
      zone: 'CS-SIM1 Adv Zone x86'
    },
    {
      id: '3',
      name: 'autoScaleVm-autoscale-rhel9-vm-3-iusnxr',
      status: 'BackedUp',
      size: '0.00 GiB',
      virtualSize: '0.00 GiB',
      instanceName: 'autoScaleVm-autoscale-rhel9-vm-3-iusnxr',
      backupOfferingName: 'Gold Backup',
      intervalType: 'MANUAL',
      type: 'FULL',
      created: '18 Apr 2024 00:00:00',
      account: 'admin',
      domain: 'ROOT',
      zone: 'CS-SIM1 Adv Zone x86'
    }
  ];

  currentPage = 1;
  itemsPerPage = 20;

  get totalItems(): number {
    return this.backups.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}
