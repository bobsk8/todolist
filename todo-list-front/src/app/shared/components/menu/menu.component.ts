import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/core/services/login.service';
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
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    this.user = this.loginService.getUserSession();
  }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
