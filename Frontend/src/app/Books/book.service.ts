import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiURL = "http://localhost:8000/api/";
 
  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiURL+"allbooks")
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(book:Book): Observable<Book> {
    return this.httpClient.post<Book>(this.apiURL+"store", JSON.stringify(book), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<Book> {
    return this.httpClient.get<Book>(this.apiURL +"book"+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number, Book:Book): Observable<Book> {
    return this.httpClient.post<Book>(this.apiURL +"update"+ id, JSON.stringify(Book), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Book>(this.apiURL +"delete"+ id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
