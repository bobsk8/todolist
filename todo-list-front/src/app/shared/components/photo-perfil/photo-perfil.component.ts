import { Component, Input, OnInit } from '@angular/core';

import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-photo-perfil',
  templateUrl: './photo-perfil.component.html',
  styleUrls: ['./photo-perfil.component.css']
})
export class PhotoPerfilComponent implements OnInit {

  @Input() public photoClass = '';
  @Input() public photoAlt = '';
  public photo = '';
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getPhoto();
  }

  async getPhoto(): Promise<void> {
    const currentUser = this.loginService.getUserSession();
  }

}
