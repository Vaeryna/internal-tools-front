import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { Tool } from '../../models/Tool.models';
import { CapitalizePipe } from '../../utils/capitalize-pipe-pipe';
import { sortBy } from '../../utils/sort-by';
import { Calendar, ChevronDown, ChevronUp, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-recent-tools-tab',
  imports: [CapitalizePipe, LucideAngularModule],
  templateUrl: './recent-tools-tab.html',
  styleUrl: './recent-tools-tab.css',
})
export class RecentToolsTab implements OnInit {
  constructor(
    private toolService: ToolsService,
    private cdr: ChangeDetectorRef,
  ) {}

  tools: Tool[] = [];
  protected readonly Calendar = Calendar;
  protected readonly ChevronDown = ChevronDown;
  protected readonly ChevronUp = ChevronUp;


  ngOnInit() {
    this.toolService
      .getTools({ _sort: 'update_at', _order: 'desc', _limit: 8 })
      .subscribe((tools) => {
        this.tools = tools;
        console.log(tools);

        this.cdr.detectChanges();
      });
  }

  sort(filter: string, order: 'asc' | 'des') {
    return sortBy(filter, order, this.tools);
  }
}
