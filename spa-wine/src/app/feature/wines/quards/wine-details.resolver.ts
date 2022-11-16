import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/shared/interfaces/wine';

@Injectable({
  providedIn: 'root',
})
export class WineDetailsResolver implements Resolve<IWine> {
  constructor(private wineService: WineService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log('r and s', route, state);
    return this.wineService.getOne$(route.params['wineId']);
  }
}

