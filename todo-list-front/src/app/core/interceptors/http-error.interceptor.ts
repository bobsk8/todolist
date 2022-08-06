import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';

          if (error?.error?.message?.includes('JWT expired')) {
            errorMessage = 'Session expired, please log in again';
            sessionStorage.clear();
            this.router.navigate(['']);
          } else if (error?.error?.message) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = 'Oops! something went wrong.';
          }
          this.openErrorDialog(errorMessage);
          return throwError(errorMessage);
        })
      );
  }

  private openErrorDialog(message: any): void {
    alert(message);
  }
}
