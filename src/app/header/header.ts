import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  selectedView = 'Default view';
}
