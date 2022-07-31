import { Injectable } from '@angular/core';

import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

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
