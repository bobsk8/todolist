import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedRedirectGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  
  public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isPermition();
  }

  private isPermition(): boolean {
    const userAuth = this.authService.getUserSessionToken();
    if (userAuth) {
      this.router.navigate(['/main/project']);
      return false;
    }
    return true;
  }
}
