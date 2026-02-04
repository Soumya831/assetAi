import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface MenuItem {
  name: string;
  icon: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MatIconModule, MatListModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    { name: 'Compute', icon: 'computer', hasSubmenu: true },
    { name: 'Storage', icon: 'storage', hasSubmenu: true },
    { name: 'Network', icon: 'wifi', hasSubmenu: true },
    { name: 'Images', icon: 'image', hasSubmenu: true },
    { name: 'Events', icon: 'event', hasSubmenu: true },
    { name: 'Projects', icon: 'folder', hasSubmenu: true },
    { name: 'Roles', icon: 'admin_panel_settings', hasSubmenu: true },
    { name: 'Accounts', icon: 'group', hasSubmenu: true },
    { name: 'Domains', icon: 'language', hasSubmenu: true },
    { name: 'Infrastructure', icon: 'business', hasSubmenu: true },
    { name: 'Service Offerings', icon: 'settings', hasSubmenu: true },
    { name: 'Configuration', icon: 'tune', hasSubmenu: true },
    { name: 'Extensions', icon: 'extension', hasSubmenu: true },
    { name: 'Tools', icon: 'build', hasSubmenu: true },
  ];
}
