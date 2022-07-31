import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LoginReturnDto } from 'src/app/dto/login-return.dto';
import { LoginDto } from 'src/app/dto/login.dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.apiEndPoint;

  constructor(
    private http: HttpClient
  ) { }

  public login(loginDto: LoginDto): Observable<LoginReturnDto> {
    return this.http.post<LoginReturnDto>(`${this.url}/auth/login`, loginDto, httpOptions)
      .pipe(
        catchError(err => {
          console.log('login error: ', err);
          return throwError(err);
        })
      );
  }

  public logout(): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/logout`, { isLogout: true }, httpOptions)
      .pipe(
        catchError(err => {
          console.log('logout error: ', err);
          return throwError(err);
        })
      );
  }
}
