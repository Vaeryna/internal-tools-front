import { ChangeDetectorRef, Component } from '@angular/core';
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
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LucideAngularModule,
    RouterLink,
    CommonModule,
    RouterLinkActive,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private cdr: ChangeDetectorRef) {}
  readonly Search = Search;
  readonly DarkMode = Moon;
  readonly NotificationNone = Bell;
  readonly Notification = BellDot;
  readonly Settings = Settings;
  protected readonly ChevronDown = ChevronDown;
  protected readonly Menu = Menu;

  menuOpen = false;

  notifications = false;

  searching = new FormControl('');

  search() {
    console.log(this.searching.value);
  }
}
