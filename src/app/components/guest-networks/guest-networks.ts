import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface GuestNetwork {
  id: string;
  name: string;
  hasAlert: boolean;
  state: 'Setup' | 'Implemented';
  type: 'Shared' | 'Isolated' | 'L2';
  vpc: string;
  ipv4Cidr: string;
  ipv6Cidr: string;
  broadcastUri: string;
  domain: string;
  account: string;
  zone: string;
}

@Component({
  selector: 'app-guest-networks',
  imports: [CommonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './guest-networks.html',
  styleUrl: './guest-networks.scss',
})
export class GuestNetworks {
  networks: GuestNetwork[] = [
    {
      id: '1',
      name: 'defaultGuestNetwork',
      hasAlert: false,
      state: 'Setup',
      type: 'Shared',
      vpc: '',
      ipv4Cidr: '',
      ipv6Cidr: '',
      broadcastUri: 'vlan://untagged',
      domain: '/',
      account: '',
      zone: 'EU-SOF1 Adv VMware x86',
    },
    {
      id: '2',
      name: 'test-network',
      hasAlert: true,
      state: 'Implemented',
      type: 'Isolated',
      vpc: '',
      ipv4Cidr: '10.1.1.0/24',
      ipv6Cidr: '',
      broadcastUri: 'vlan://3087',
      domain: '/',
      account: 'rick',
      zone: 'CS-SIM1 Adv Zone x86',
    },
    {
      id: '3',
      name: 'defaultGuestNetwork',
      hasAlert: false,
      state: 'Setup',
      type: 'Shared',
      vpc: '',
      ipv4Cidr: '',
      ipv6Cidr: '',
      broadcastUri: 'vlan://untagged',
      domain: '/',
      account: '',
      zone: 'IN-BLR1 Basic Zone x86',
    },
    {
      id: '4',
      name: 'defaultGuestNetwork',
      hasAlert: false,
      state: 'Setup',
      type: 'Shared',
      vpc: '',
      ipv4Cidr: '192.168.1.0/24',
      ipv6Cidr: '',
      broadcastUri: 'vlan//900',
      domain: '/',
      account: '',
      zone: 'IN-GGN1 SG Zone ARM64',
    },
    {
      id: '5',
      name: 'Admin Shared Network',
      hasAlert: false,
      state: 'Setup',
      type: 'Shared',
      vpc: '',
      ipv4Cidr: '192.168.50.0/24',
      ipv6Cidr: '',
      broadcastUri: 'vlan//50',
      domain: '/',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
    {
      id: '6',
      name: 'Admin L2 Network',
      hasAlert: false,
      state: 'Setup',
      type: 'L2',
      vpc: '',
      ipv4Cidr: '',
      ipv6Cidr: '',
      broadcastUri: 'vlan//123',
      domain: '/',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
    {
      id: '7',
      name: 'Admin VPC Tier2',
      hasAlert: false,
      state: 'Implemented',
      type: 'Isolated',
      vpc: 'Admin VPC',
      ipv4Cidr: '10.1.2.0/24',
      ipv6Cidr: '',
      broadcastUri: 'vlan//3208',
      domain: '/',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
    {
      id: '8',
      name: 'Admin VPC Tier1',
      hasAlert: false,
      state: 'Implemented',
      type: 'Isolated',
      vpc: 'Admin VPC',
      ipv4Cidr: '10.1.1.0/24',
      ipv6Cidr: '',
      broadcastUri: 'vlan//3817',
      domain: '/',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
    {
      id: '9',
      name: 'Admin Isolated Network',
      hasAlert: false,
      state: 'Implemented',
      type: 'Isolated',
      vpc: '',
      ipv4Cidr: '10.1.1.0/24',
      ipv6Cidr: '',
      broadcastUri: 'vlan//3915',
      domain: '/',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
  ];

  currentPage = 1;
  itemsPerPage = 20;

  get totalItems(): number {
    return this.networks.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}
