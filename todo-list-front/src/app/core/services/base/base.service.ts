import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {
  protected url = environment.apiEndPoint;
  protected path: string;

  constructor(
    protected http: HttpClient
  ) { }

  public create(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}/${this.path}`, item, httpOptions)
      .pipe(
        catchError(err => {
          console.log('create error: ', err);
          return throwError(err);
        })
      );
  }

  public update(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${this.path}/${id}`, item, httpOptions)
      .pipe(
        catchError(err => {
          console.log('update error ', err);
          return throwError(err);
        })
      );
  }

  public getAll(offset = 0, limit = 10, sortBy = { id: 'DESC' }): Observable<T[]> {
    const params = `?limit=${limit}&offset=${offset}&sortBy=${JSON.stringify(sortBy)}`;
    return this.http.get<T[]>(`${this.url}/${this.path}${params}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getAll error ', err);
          return throwError(err);
        })
      );
  }

  public delete(userId: number): Observable<T> {
    return this.http.delete<T>(`${this.url}/${this.path}/${userId}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('delete error ', err);
          return throwError(err);
        })
      );
  }

  public getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${this.path}/${id}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getById error ', err);
          return throwError(err);
        })
      );
  }
}
