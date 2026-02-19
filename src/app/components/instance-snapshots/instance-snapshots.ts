import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface InstanceSnapshot {
  id: string;
  displayName: string;
  state: 'Ready' | 'Creating' | 'Error';
  name: string;
  type: string;
  current: boolean;
  parent: boolean;
  created: string;
  account: string;
  domain: string;
}

@Component({
  selector: 'app-instance-snapshots',
  imports: [CommonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './instance-snapshots.html',
  styleUrl: './instance-snapshots.scss',
})
export class InstanceSnapshots {
  snapshots: InstanceSnapshot[] = [
    {
      id: '1',
      displayName: 'test-admin-vmsnap',
      state: 'Ready',
      name: 'i-2-228-VM_VS_20230810151320',
      type: 'DiskAndMemory',
      current: true,
      parent: false,
      created: '10 Aug 2023 15:13:20',
      account: 'admin',
      domain: 'ROOT',
    },
  ];

  currentPage = 1;
  itemsPerPage = 20;

  get totalItems(): number {
    return this.snapshots.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}
