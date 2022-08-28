import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from 'src/app/model/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiEndPoint;
  constructor(
    private http: HttpClient
  ) { }

  create(user: User): Observable<User> {
    return this.http.post(`${this.url}/user`, user, httpOptions)
      .pipe(
        catchError(err => {
          console.log('create error: ', err);
          return throwError(err);
        })
      );
  }

  public getOwnUser(): Observable<User> {
    return this.http.get<User>(`${this.url}/user/own/datas`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getOwnUser user ', err);
          return throwError(err);
        })
      );
  }

  public update(id: number, user: User): Observable<User> {
    return this.http.put(`${this.url}/user/${id}`, user, httpOptions)
      .pipe(
        catchError(err => {
          console.log('update user ', err);
          return throwError(err);
        })
      );
  }

  public getAll(offset = 0, limit = 10, sortBy = { id: 'DESC' }): Observable<User[]> {
    const params = `?limit=${limit}&offset=${offset}&sortBy=${JSON.stringify(sortBy)}`;
    return this.http.get<User[]>(`${this.url}/user${params}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getAll user ', err);
          return throwError(err);
        })
      );
  }

  public delete(userId: number): Observable<User> {
    return this.http.delete(`${this.url}/user/${userId}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('delete user ', err);
          return throwError(err);
        })
      );
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getById user ', err);
          return throwError(err);
        })
      );
  }
}
