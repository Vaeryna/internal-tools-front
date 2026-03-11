import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardServices {
  constructor(private http: HttpClient) {}

  getAnalytics(): Observable<any> {
    return this.http.get(`api/analytics`).pipe(
      map((analytics) => {
        console.log('service', analytics);
        return analytics;
      }),
    );
  }


  getTotalDepartment(): Observable<any> {
    return this.http.get(`api/departments`).pipe(
      map((dep) => {
        return dep;
      }),
    );
  }
}
