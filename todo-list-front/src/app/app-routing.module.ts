import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedRedirectGuard } from './core/guards/logged-redirect.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
  canLoad: [LoggedRedirectGuard] },
  { path: 'register', loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule) },
  { path: 'main', redirectTo: 'main/project', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
