import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

interface Instance {
  id: string;
  name: string;
  icon: string;
  iconColor: string;
  state: 'Running' | 'Stopped';
  internalName: string;
  ipAddress: string;
  arch: string;
  host: string;
  account: string;
  zone: string;
}

@Component({
  selector: 'app-instances',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
  templateUrl: './instances.html',
  styleUrl: './instances.scss',
})
export class Instances {
  displayedColumns: string[] = [
    'select',
    'name',
    'state',
    'internalName',
    'ipAddress',
    'arch',
    'host',
    'account',
    'zone',
  ];

  instances: Instance[] = [
    {
      id: '1',
      name: 'test-admin-vm',
      icon: 'desktop_windows',
      iconColor: '#f44336',
      state: 'Stopped',
      internalName: 'i-2-228-VM',
      ipAddress: '10.1.1.154',
      arch: 'x86_64',
      host: 'SimulatedAgent.8b100ac6-76f1-448a-8b79-9a58a67e1f58',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
    {
      id: '2',
      name: 'test-sg-vm',
      icon: 'cloud',
      iconColor: '#4caf50',
      state: 'Running',
      internalName: 'i-2-230-VM',
      ipAddress: '192.168.1.11',
      arch: 'x86_64',
      host: 'SimulatedAgent.8b100ac6-76f1-448a-8b79-9a58a67e1f58',
      account: 'admin',
      zone: 'IN-GGN1 SG Zone ARM64',
    },
    {
      id: '3',
      name: 'admin-ubuntu-vm',
      icon: 'desktop_windows',
      iconColor: '#f44336',
      state: 'Running',
      internalName: 'i-2-232-VM',
      ipAddress: '192.168.1.137',
      arch: 'x86_64',
      host: 'SimulatedAgent.4d3186fc-ca14-4b28-a859-983b8f347e64',
      account: 'admin',
      zone: 'IN-BLR1 Basic Zone x86',
    },
    {
      id: '4',
      name: 'admin-debian-vm',
      icon: 'desktop_windows',
      iconColor: '#f44336',
      state: 'Running',
      internalName: 'i-2-234-VM',
      ipAddress: '192.168.1.135',
      arch: 'x86_64',
      host: 'SimulatedAgent.4d3186fc-ca14-4b28-a859-983b8f347e64',
      account: 'admin',
      zone: 'IN-BLR1 Basic Zone x86',
    },
    {
      id: '5',
      name: 'rick-pfsense-vm',
      icon: 'cloud_circle',
      iconColor: '#000000',
      state: 'Running',
      internalName: 'i-39-235-VM',
      ipAddress: '10.1.1.232',
      arch: 'x86_64',
      host: 'SimulatedAgent.3d4d6bb6-fe4d-4cc4-8fa0-cc0b51020ff2',
      account: 'rick',
      zone: 'CS-SIM1 Adv Zone x86',
    },
    {
      id: '6',
      name: 'rick-ubuntu',
      icon: 'desktop_windows',
      iconColor: '#f44336',
      state: 'Running',
      internalName: 'i-39-237-VM',
      ipAddress: '192.168.1.12',
      arch: 'x86_64',
      host: 'SimulatedAgent.62ebb658-ca20-4146-9bb2-9716e6627b48',
      account: 'rick',
      zone: 'IN-GGN1 SG Zone ARM64',
    },
    {
      id: '7',
      name: 'admin-vpc-vm',
      icon: 'desktop_windows',
      iconColor: '#f44336',
      state: 'Running',
      internalName: 'i-2-240-VM',
      ipAddress: '10.1.1.175',
      arch: 'x86_64',
      host: 'SimulatedAgent.47e6eebe-e49e-4faf-a123-0d5b10749ef1',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
  ];
}
