import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Brokers } from "./brokers.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class BrokersService {
  baseUrl = "http://localhost:3001/brokers";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(brokers: Brokers): Observable<Brokers> {
    console.log(brokers)
    return this.http.post<Brokers>(this.baseUrl, brokers)
  }

  read(): Observable<Brokers[]> {
    return this.http.get<Brokers[]>(this.baseUrl)
  }
}
