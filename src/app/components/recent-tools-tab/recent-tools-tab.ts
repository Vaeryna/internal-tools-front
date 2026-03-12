import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { Tool } from '../../models/Tool.models';
import { CapitalizePipe } from '../../utils/capitalize-pipe-pipe';
import { Calendar, LucideAngularModule } from 'lucide-angular';

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

  ngOnInit() {
    this.toolService
      .getTools({ _sort: 'update_at', _order: 'desc', _limit: 8 })
      .subscribe((tools) => {
        this.tools = tools;
        console.log(tools);

        this.cdr.detectChanges();
      });
  }

  protected readonly Calendar = Calendar;
}
