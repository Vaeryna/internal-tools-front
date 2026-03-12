import { Component, Input } from '@angular/core';
import { CapitalizePipe } from '../../utils/capitalize-pipe-pipe';
import { sortBy } from '../../utils/sort-by';
import { Calendar, ChevronDown, ChevronUp, ImageOff, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-recent-tools-tab',
  imports: [CapitalizePipe, LucideAngularModule],
  templateUrl: './recent-tools-tab.html',
  styleUrl: './recent-tools-tab.css',
})
export class RecentToolsTab {
  protected readonly Calendar = Calendar;
  protected readonly ChevronDown = ChevronDown;
  protected readonly ChevronUp = ChevronUp;
  protected readonly ImageOff = ImageOff;

  @Input() limit?: number;
  @Input() tools: any[] = [];

  sort(filter: string, order: 'asc' | 'desc') {
    return sortBy(filter, order, this.tools);
  }
}
