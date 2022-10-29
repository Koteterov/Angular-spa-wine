import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register/register-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    CoreModule,
    
    
  ],
})
export class AuthModule { }
