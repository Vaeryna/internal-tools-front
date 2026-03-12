import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  Bell,
  BellDot,
  ChevronDown,
  LucideAngularModule,
  Menu,
  Moon,
  Search,
  Settings,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, ReactiveFormsModule, LucideAngularModule, RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly Search = Search;
  readonly DarkMode = Moon;
  readonly NotificationNone = Bell;
  readonly Notification = BellDot;
  readonly Settings = Settings;
  protected readonly ChevronDown = ChevronDown;
  protected readonly Menu = Menu;

  menuOpen = false;
  activePage = 'Tools';

  notifications = false;

  searching = new FormControl('');

  search() {
    console.log(this.searching.value);
  }
}
