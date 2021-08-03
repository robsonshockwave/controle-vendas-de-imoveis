import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Report } from './report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  baseUrl = "http://localhost:3001/reports";

  constructor(private http: HttpClient) { }

  read(): Observable<Report[]> {
    return this.http.get<Report[]>(this.baseUrl)
  }

  readData(data: string): Observable<Report[]> {
    const url = `${this.baseUrl}?data=${data}`;
    return this.http.get<Report[]>(url).pipe(
      map((obj) => obj )
    );  
  }
}
