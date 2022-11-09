import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login-page.component';
import { RegisterPageComponent } from './auth/register/register-page.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './feature/pages/not-found-page/not-found-page.component';
import { ProfileComponent } from './feature/pages/profile/profile.component';
import { CreateComponent } from './feature/wines/create/create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    component: HomePageComponent
  },

  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'create',
    component: CreateComponent
  },

  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
