import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { RoleEnum } from 'src/app/shared/utils/role.enum';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'project', loadChildren: () =>
          import('./components/project/project.module').then(m => m.ProjectModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'project/:id', loadChildren: () =>
          import('./components/project-detail/project-detail.module').then(m => m.ProjectDetailModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'project/new', loadChildren: () =>
          import('./components/project-detail/project-detail.module').then(m => m.ProjectDetailModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user', loadChildren: () =>
          import('./components/user/user.module').then(m => m.UserModule),
        canLoad: [AuthGuard, RoleGuard],
        data: { roles: [RoleEnum.Admin] }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
