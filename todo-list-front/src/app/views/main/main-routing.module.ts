import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
