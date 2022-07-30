import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private loginService: LoginService,
    private router: Router,
) { }

public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isPermition(route.path);
}

private isPermition(path: string): boolean {
    const userAuth = this.loginService.getUserSessionToken();
    if (!userAuth) {
        this.router.navigate(['']);
        return false;
    }
    return true;
}
}
