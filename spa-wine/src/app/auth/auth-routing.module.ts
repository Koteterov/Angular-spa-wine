import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProfileComponent } from '../feature/pages/profile/profile.component';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterPageComponent } from './register/register-page.component';

const routes: Routes = [
  { path: 'user/login', component: LoginPageComponent, title: 'Login' },
  {
    path: 'user/register',
    component: RegisterPageComponent,
    title: 'Register',
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
    title: 'Profile',
    canActivate: [AuthGuard],
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
