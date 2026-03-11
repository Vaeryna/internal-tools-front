import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  Bell,
  BellDot,
  ChevronDown,
  CircleSmall,
  LucideAngularModule,
  Moon,
  Search,
  Settings,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, ReactiveFormsModule, LucideAngularModule, RouterLink],
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
  protected readonly CircleSmall = CircleSmall;
  activePage = 'Tools';

  notifications = false;

  searching = new FormControl('');

  search() {
    console.log(this.searching.value);
  }
}
