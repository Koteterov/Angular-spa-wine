import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/core/interfaces/wine';

@Component({
  selector: 'app-my-wines',
  templateUrl: './my-wines.component.html',
  styleUrls: ['./my-wines.component.css'],
})
export class MyWinesComponent implements OnInit {
  wineList: IWine[] = [];
  showSpinner: boolean = false;

  constructor(
    private wineService: WineService,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    this.showSpinner = true;
    this.userService.getProfile$().pipe(
        mergeMap((user) => {
          return this.wineService.getMy$(user._id);
        })
      )
      .subscribe((wines) => {
        this.wineList = wines;
        this.showSpinner = false;
      });
  }
}
