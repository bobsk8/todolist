import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotoPerfilComponent } from './components/photo-perfil/photo-perfil.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UploadInputComponent } from './components/upload-input/upload-input.component';



@NgModule({
  declarations: [
    BreadcrumbComponent, 
    FooterComponent, 
    NavbarComponent, 
    PhotoPerfilComponent, 
    SidebarComponent, 
    UploadInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbComponent, 
    FooterComponent, 
    NavbarComponent, 
    PhotoPerfilComponent, 
    SidebarComponent, 
    UploadInputComponent
  ]
})
export class SharedModule { }
