import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule} from '@angular/cdk/scrolling';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    UserRoutingModule
  ]
})
export class UserModule { }
