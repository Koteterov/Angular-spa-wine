import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    ProfileComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    // HomePageComponent
  ]
})
export class PagesModule { }
