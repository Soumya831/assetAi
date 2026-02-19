import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

interface Volume {
  id: string;
  name: string;
  state: 'Ready' | 'Allocated';
  size: string;
  type: 'ROOT' | 'DATADISK';
  instanceName: string;
  instanceState: 'Running' | 'Stopped';
  storage: string;
  account: string;
  zone: string;
}

@Component({
  selector: 'app-volumes',
  imports: [CommonModule, FormsModule, MatIconModule, MatCheckboxModule],
  templateUrl: './volumes.html',
  styleUrl: './volumes.scss',
})
export class Volumes {
  volumes: Volume[] = [
    {
      id: '1',
      name: 'ROOT-228',
      state: 'Ready',
      size: '0.00 GiB',
      type: 'ROOT',
      instanceName: 'test-admin-vm',
      instanceState: 'Stopped',
      storage: 'Sim-Adv-Primary1',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86'
    },
    {
      id: '2',
      name: 'ROOT-230',
      state: 'Ready',
      size: '0.00 GiB',
      type: 'ROOT',
      instanceName: 'test-sg-vm',
      instanceState: 'Running',
      storage: 'Sim-Adv-SG-Primary1',
      account: 'admin',
      zone: 'IN-GGN1 SG Zone ARM64'
    },
    {
      id: '3',
      name: 'ROOT-232',
      state: 'Ready',
      size: '0.00 GiB',
      type: 'ROOT',
      instanceName: 'admin-ubuntu-vm',
      instanceState: 'Running',
      storage: 'Sim-Basic Primary1',
      account: 'admin',
      zone: 'IN-BLR1 Basic Zone x86'
    },
    {
      id: '4',
      name: 'DATA-232',
      state: 'Ready',
      size: '100.00 GiB',
      type: 'DATADISK',
      instanceName: 'admin-ubuntu-vm',
      instanceState: 'Running',
      storage: 'Sim-Basic Primary1',
      account: 'admin',
      zone: 'IN-BLR1 Basic Zone x86'
    },
    {
      id: '5',
      name: 'ROOT-234',
      state: 'Ready',
      size: '0.00 GiB',
      type: 'ROOT',
      instanceName: 'admin-debian-vm',
      instanceState: 'Running',
      storage: 'Sim-Basic Primary1',
      account: 'admin',
      zone: 'IN-BLR1 Basic Zone x86'
    },
    {
      id: '6',
      name: 'ROOT-235',
      state: 'Ready',
      size: '20.00 GiB',
      type: 'ROOT',
      instanceName: 'rick-pfsense-vm',
      instanceState: 'Running',
      storage: 'Sim-Adv-Primary1',
      account: 'rick',
      zone: 'CS-SIM1 Adv Zone x86'
    },
    {
      id: '7',
      name: 'ROOT-237',
      state: 'Ready',
      size: '0.00 GiB',
      type: 'ROOT',
      instanceName: 'rick-ubuntu',
      instanceState: 'Running',
      storage: 'Sim-Adv-SG-Primary1',
      account: 'rick',
      zone: 'IN-GGN1 SG Zone ARM64'
    },
    {
      id: '8',
      name: 'DATA-237',
      state: 'Ready',
      size: '100.00 GiB',
      type: 'DATADISK',
      instanceName: 'rick-ubuntu',
      instanceState: 'Running',
      storage: 'Sim-Adv-SG-Primary1',
      account: 'rick',
      zone: 'IN-GGN1 SG Zone ARM64'
    }
  ];

  showCreateDialog = false;

  newVolume = {
    ownerType: 'Account',
    domain: 'ROOT',
    account: 'admin',
    name: '',
    zone: 'CS-SIM1 Adv Zone x86',
    diskOffering: 'Custom Disk',
    size: '',
    attachToInstance: false
  };

  ownerTypes = ['Account', 'Project'];
  domains = ['ROOT', 'child-domain'];
  accounts = ['admin', 'rick'];
  zones = ['CS-SIM1 Adv Zone x86', 'IN-GGN1 SG Zone ARM64', 'IN-BLR1 Basic Zone x86'];
  diskOfferings = ['Custom Disk', 'Small', 'Medium', 'Large'];

  currentPage = 1;
  itemsPerPage = 20;

  get totalItems(): number {
    return this.volumes.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  openCreateDialog(): void {
    this.showCreateDialog = true;
  }

  closeCreateDialog(): void {
    this.showCreateDialog = false;
    this.resetForm();
  }

  createVolume(): void {
    this.closeCreateDialog();
  }

  resetForm(): void {
    this.newVolume = {
      ownerType: 'Account',
      domain: 'ROOT',
      account: 'admin',
      name: '',
      zone: 'CS-SIM1 Adv Zone x86',
      diskOffering: 'Custom Disk',
      size: '',
      attachToInstance: false
    };
  }
}
