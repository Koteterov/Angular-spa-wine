import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AllWinesComponent } from './all-wines/all-wines.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { WinesRoutingModule } from './wines-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'



@NgModule({
  declarations: [
    CreateComponent,
    AllWinesComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule,
    WinesRoutingModule,
    MatProgressSpinnerModule
  ],
  
})
export class WinesModule { }
