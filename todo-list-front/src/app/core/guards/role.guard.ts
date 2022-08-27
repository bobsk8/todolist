import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public canLoad(route: ActivatedRouteSnapshot, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isPermition(route);
  }

  private isPermition(route: ActivatedRouteSnapshot): boolean {
    const userAuth = this.authService.getUserSession();
    if (userAuth) {
      if (route?.data?.roles?.some(el1 => userAuth.roles.some(el2 => el2.id === el1))) {
        return true;
      }
      this.router.navigate(['main/project']);
      return false;
    }
    return false;
  }
}
