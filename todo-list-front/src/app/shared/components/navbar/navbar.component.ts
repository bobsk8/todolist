import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

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
    private authService: AuthService
  ) { }

  public ngOnInit(): void {
    this.currentUser = this.authService.getUserSession();
  }

  public logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
