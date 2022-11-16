import { RouterModule, Routes } from '@angular/router';
import { AllWinesComponent } from './all-wines/all-wines.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { WineDetailsResolver } from './guards/wine-details.resolver';

const routes: Routes = [
  { path: 'wine/create', component: CreateComponent, title: 'Create' },
  { path: 'wine/all', component: AllWinesComponent, title: 'All Wines' },
  { path: 'wine/edit/:wineId', component: EditComponent, title: 'Edit' },
  {
    path: 'wine/details/:wineId',
    resolve: { wine: WineDetailsResolver },
    component: DetailsComponent,
    title: 'Details',
  },
];

export const WinesRoutingModule = RouterModule.forChild(routes);

