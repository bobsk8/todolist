import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public currentUser: User;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    this.currentUser = this.loginService.getUserSession();
  }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
