import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.isPermition(route.path);
  }

  private isPermition(path: string): boolean {
    const userAuth = this.authService.getUserSessionToken();
    if (!userAuth) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
