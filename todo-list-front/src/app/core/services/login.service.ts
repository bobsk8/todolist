import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from 'src/app/model/task.model';
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
    return this.http.post<LoginReturnDto>(`${this.url}/api/auth/login`, loginDto, httpOptions)
      .pipe(
        catchError(err => {
          console.log('login error: ', err);
          return throwError(err);
        })
      );
  }

  public setCurrentUserSession(user: User, token: string): void {
    sessionStorage.setItem('currentUser', JSON.stringify({ user, token }));
  }

  public getUserSessionToken(): string {
    return (sessionStorage.getItem('currentUser') !== null) ? JSON.parse(sessionStorage.getItem('currentUser')).token : undefined;
  }

  public getUserSession(): User {
    return (sessionStorage.getItem('currentUser') !== null) ? JSON.parse(sessionStorage.getItem('currentUser')).user : undefined;
  }
}
