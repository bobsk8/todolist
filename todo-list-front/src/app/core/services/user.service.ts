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
}
