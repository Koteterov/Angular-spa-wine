import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AllWinesComponent } from './all-wines/all-wines.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { WineDetailsResolver } from './guards/wine-details.resolver';
import { MyWinesComponent } from './my-wines/my-wines.component';

const routes: Routes = [
  {
    path: 'wine/create',
    component: CreateComponent,
    title: 'Create',
    canActivate: [AuthGuard],
  },
  { path: 'wine/all', 
    component: AllWinesComponent, 
    title: 'All Wines' },
  {
    path: 'wine/my-wines',
    component: MyWinesComponent,
    title: 'My Wines',
    canActivate: [AuthGuard],
  },
  {
    path: 'wine/edit/:wineId',
    component: EditComponent,
    title: 'Edit',
    canActivate: [AuthGuard],
  },
  {
    path: 'wine/details/:wineId',
    resolve: { wine: WineDetailsResolver },
    component: DetailsComponent,
    title: 'Details',
  },
];

export const WinesRoutingModule = RouterModule.forChild(routes);
