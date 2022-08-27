import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';

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
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getPhoto();
  }

  async getPhoto(): Promise<void> {
    const currentUser = this.authService.getUserSession();
  }

}
