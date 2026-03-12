import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecentToolsTab } from '../recent-tools-tab/recent-tools-tab';
import { CommonModule } from '@angular/common';
import { ToolsService } from '../../services/tools.service';
import { Tool } from '../../models/Tool.models';

@Component({
  selector: 'app-tools',
  imports: [RecentToolsTab, CommonModule],
  templateUrl: './tools.html',
  styleUrl: './tools.css',
})
export class Tools implements OnInit {
  constructor(
    private toolService: ToolsService,
    private cdr: ChangeDetectorRef,
  ) {}

  tools: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  ngOnInit() {
    this.toolService.getTools({ _sort: 'updated_at', _order: 'asc' }).subscribe((tools: Tool[]) => {
      this.tools = tools;
      this.cdr.detectChanges()
    });
  }
  get paginatedTools() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.tools.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.tools.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
