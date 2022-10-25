import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent
  ],
  
  imports: [
    CommonModule
  ],

  exports: [
    HomePageComponent
  ]
})
export class PagesModule { }
