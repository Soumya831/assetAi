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
      subItems: [],
    },
    {
      name: 'Network',
      icon: 'wifi',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Images',
      icon: 'image',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Events',
      icon: 'event',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Projects',
      icon: 'folder',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Roles',
      icon: 'admin_panel_settings',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Accounts',
      icon: 'group',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Domains',
      icon: 'language',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Infrastructure',
      icon: 'business',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Service Offerings',
      icon: 'settings',
      hasSubmenu: true,
      subItems: [],
    },
    {
      name: 'Configuration',
      icon: 'tune',
      hasSubmenu: true,
      subItems: [],
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
      subItems: [],
    },
  ];

  toggleSubmenu(item: any): void {
    if (item.hasSubmenu) {
      item.expanded = !item.expanded;
    }
  }
}
