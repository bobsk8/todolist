import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'project', loadChildren: () =>
          import('./components/project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'project-detail', loadChildren: () =>
          import('./components/project-detail/project-detail.module').then(m => m.ProjectDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
