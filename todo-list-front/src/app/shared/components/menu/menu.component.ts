import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { StorageService } from 'src/app/core/services/storage.service';

import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public user: User;
  constructor(
    private router: Router,
    private storageService: StorageService,
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    this.user = this.storageService.getUserSession();
  }

  public logout(): void {    
    this.loginService.logout()
    .subscribe(() => {
      this.router.navigate(['']);
      sessionStorage.clear();
    }, err => console.log(err));
  }

}
