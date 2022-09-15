import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from 'src/app/model/user.model';
import { BaseService } from './base/base.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  protected url = environment.apiEndPoint;
  protected path = 'user';

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  public getOwnUser(): Observable<User> {
    return this.http.get<User>(`${this.url}/user/own/get`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getOwnUser user ', err);
          return throwError(err);
        })
      );
  }

  public updateOwnUser(user: User): Observable<User> {
    return this.http.put(`${this.url}/user/own/update`, user, httpOptions)
      .pipe(
        catchError(err => {
          console.log('updateOwnUser user', err);
          return throwError(err);
        })
      );
  }
}
