import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private storageService: StorageService,
    private router: Router,
) { }

public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isPermition(route.path);
}

private isPermition(path: string): boolean {
    const userAuth = this.storageService.getUserSessionToken();
    if (!userAuth) {
        this.router.navigate(['']);
        return false;
    }
    return true;
}
}
