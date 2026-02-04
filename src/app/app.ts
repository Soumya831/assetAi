import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Dashboard, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('CloudStack Dashboard');
}
