import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardServices {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {}

  getAnalytics(): Observable<any> {
    return this.http.get(`api/analytics`).pipe(
      map((analytics) => {
        console.log('service', analytics);
        return analytics;
      }),
    );
  }
}
