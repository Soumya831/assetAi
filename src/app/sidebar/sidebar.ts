import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  icon: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, MatIconModule, MatListModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: any[] = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    {
      name: 'Compute',
      icon: 'computer',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Instances', route: '/compute/instances' },
        { name: 'Instance Snapshots', route: '/compute/snapshots' },
        { name: 'Kubernetes', route: '/compute/kubernetes' },
        { name: 'AutoScaling Groups', route: '/compute/autoscaling' },
        { name: 'Instance Groups', route: '/compute/groups' },
        { name: 'SSH Key Pairs', route: '/compute/ssh-keys' },
        { name: 'User Data Library', route: '/compute/user-data' },
        { name: 'CNI Configuration', route: '/compute/cni' },
        { name: 'Affinity Groups', route: '/compute/affinity' },
      ],
    },
    {
      name: 'Storage',
      icon: 'storage',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Volumes', route: '/storage/volumes' },
        { name: 'Volume Snapshots', route: 'storage/volume-snapshots' },
        { name: 'Backups', route: '/storage/backups' },
        { name: 'Shared FileSystems', route: '/compute/autoscaling' },
      ],
    },
    {
      name: 'Network',
      icon: 'wifi',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Guest Networks', route: 'network/guest-networks' },
        { name: 'VPC', route: '/compute/snapshots' },
        { name: 'Security Groups', route: '/compute/kubernetes' },
        { name: 'VNF Appliances', route: '/compute/autoscaling' },
        { name: 'Public IP Addresses', route: '/compute/autoscaling' },
        { name: 'AS Numbers', route: '/compute/autoscaling' },
        { name: 'Site-to-site VPN', route: '/compute/autoscaling' },
        { name: 'VPN Connections', route: '/compute/autoscaling' },
        { name: 'Network ACLs', route: '/compute/autoscaling' },
        { name: 'VPN Users', route: '/compute/autoscaling' },
        { name: 'VPN Customer Gateway', route: '/compute/autoscaling' },
        { name: 'Tungsten Fabric', route: '/compute/autoscaling' },
        { name: 'Guest VLAN', route: '/compute/autoscaling' },
        { name: 'IPv4 Subnets', route: '/compute/autoscaling' },
      ],
    },
    {
      name: 'Images',
      icon: 'image',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Templates', route: '/compute/instances' },
        { name: 'ISOs', route: '/compute/snapshots' },
        { name: 'Kubernetes ISOs', route: '/compute/kubernetes' },
      ],
    },
    {
      name: 'Events',
      icon: 'event',
      hasSubmenu: false,
    },
    {
      name: 'Projects',
      icon: 'folder',
      hasSubmenu: false,
    },
    {
      name: 'Roles',
      icon: 'admin_panel_settings',
      hasSubmenu: false,
    },
    {
      name: 'Accounts',
      icon: 'group',
      hasSubmenu: false,
    },
    {
      name: 'Domains',
      icon: 'language',
      hasSubmenu: false,
    },
    {
      name: 'Infrastructure',
      icon: 'business',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Summary', route: '/compute/instances' },
        { name: 'Zones', route: '/compute/snapshots' },
        { name: 'Pods', route: '/compute/kubernetes' },
        { name: 'Clusters', route: '/compute/autoscaling' },
        { name: 'Hosts', route: '/compute/autoscaling' },
        { name: 'Primary Storage', route: '/compute/autoscaling' },
        { name: 'Secondary Storage', route: '/compute/autoscaling' },
        { name: 'Object Storage', route: '/compute/autoscaling' },
        { name: 'System VMs', route: '/compute/autoscaling' },
        { name: 'Virtual Routers', route: '/compute/autoscaling' },
        { name: 'Internal LB', route: '/compute/autoscaling' },
        { name: 'Management Servers', route: '/compute/autoscaling' },
        { name: 'CPC Sockets', route: '/compute/autoscaling' },
        { name: 'DB/Usage Server', route: '/compute/autoscaling' },
        { name: 'Alets', route: '/compute/autoscaling' },
      ],
    },
    {
      name: 'Service Offerings',
      icon: 'settings',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Compute Offerings', route: '/compute/instances' },
        { name: 'System Offerings', route: '/compute/snapshots' },
        { name: 'Disk Offerings', route: '/compute/kubernetes' },
        { name: 'Backup Offerings', route: '/compute/autoscaling' },
        { name: 'Network Offerings', route: '/compute/autoscaling' },
        { name: 'VPC Offerings', route: '/compute/autoscaling' },
      ],
    },
    {
      name: 'Configuration',
      icon: 'tune',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Global Settings', route: '/compute/instances' },
        { name: 'LDAP Configuration', route: '/compute/snapshots' },
        { name: 'OAuth Configuration', route: '/compute/kubernetes' },
        { name: 'Backup Repository', route: '/compute/autoscaling' },
        { name: 'Hypervisor Capabilites', route: '/compute/autoscaling' },
        { name: 'Guest OS Categories', route: '/compute/autoscaling' },
        { name: 'Guest OS ', route: '/compute/autoscaling' },
        { name: 'Guest OS mappings', route: '/compute/autoscaling' },
        { name: 'GPU Card Types', route: '/compute/autoscaling' },
      ],
    },
    {
      name: 'Extensions',
      icon: 'extension',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Tools',
      icon: 'build',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Comments', route: '/compute/kubernetes' },
        { name: 'Usage', route: '/compute/autoscaling' },
        { name: 'Import-Export Instances', route: '/compute/autoscaling' },
        { name: 'Import Data Volumes', route: '/compute/autoscaling' },
        { name: 'Webhooks ', route: '/compute/autoscaling' },
      ],
    },
    {
      name: 'Quota',
      icon: 'pie_chart',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { name: 'Summary', route: '/compute/kubernetes' },
        { name: 'Tariff', route: '/compute/autoscaling' },
        { name: 'Template type', route: '/compute/autoscaling' },
      ],
    },
    {
      name: 'API Docs',
      icon: 'menu_book',
      hasSubmenu: false,
    },
  ];

  toggleSubmenu(item: any): void {
    if (item.hasSubmenu) {
      item.expanded = !item.expanded;
    }
  }
}
