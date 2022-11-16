import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login-page.component';
import { RegisterPageComponent } from './auth/register/register-page.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './feature/pages/not-found-page/not-found-page.component';
import { ProfileComponent } from './feature/pages/profile/profile.component';
import { AllWinesComponent } from './feature/wines/all-wines/all-wines.component';
import { CreateComponent } from './feature/wines/create/create.component';
import { DetailsComponent } from './feature/wines/details/details.component';
import { EditComponent } from './feature/wines/edit/edit.component';
import { WineDetailsResolver } from './feature/wines/guards/wine-details.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home',
  },

  // {
  //   path: 'user',
  //   children: [
  //     { path: 'login', component: LoginPageComponent, title: 'Login' },
  //     { path: 'register', component: RegisterPageComponent, title: 'Register' },
  //     { path: 'profile', component: ProfileComponent, title: 'Profile' },
  //   ],
  // },

  // {
  //   path: 'wine',
  //   children: [
  //     { path: 'create', component: CreateComponent, title: 'Create' },
  //     { path: 'all', component: AllWinesComponent, title: 'All Wines' },
  //     { path: 'edit/:wineId', component: EditComponent, title: 'Edit' },
  //     {
  //       path: 'details/:wineId',
  //       resolve: { wine: WineDetailsResolver },
  //       component: DetailsComponent,
  //       title: 'Details',
  //     },
  //   ],
  // },

  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
