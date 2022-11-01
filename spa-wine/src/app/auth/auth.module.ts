import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register/register-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule 
  ],
})
export class AuthModule { }
