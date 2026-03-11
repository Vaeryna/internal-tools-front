import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tool, ToolsFilters } from '../models/Tool.models';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor(private http: HttpClient) {}

  getTools(filters?: ToolsFilters) {
    let params = new HttpParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== '') {
          params = params.set(key, String(value));
        }
      });
    }
    console.log("api", `api/tools?${params.toString()}`);

    return this.http.get<Tool[]>(`api/tools`, { params });
  }
}
