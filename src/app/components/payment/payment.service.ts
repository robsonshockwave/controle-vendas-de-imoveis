import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from "./payment.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = "http://localhost:3001/payments";

  constructor(private http: HttpClient) { }

  read(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl)
  }
}
