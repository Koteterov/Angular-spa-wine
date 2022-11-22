import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { merge, mergeAll, mergeMap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { WineService } from 'src/app/core/services/wine.service';
import { IUser } from 'src/app/core/interfaces/user';
import { IWine } from 'src/app/core/interfaces/wine';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser!: IUser;
  myLikes: IWine[] = [];
  myWines: IWine[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private wineService: WineService
  ) {}

  ngOnInit(): void {
    // myLikes
    this.userService
      .getProfile$()
      .pipe(
        mergeMap((user) => {
          this.currentUser = user;
          return this.wineService.getMyLikes$(user._id);
        })
      )
      .subscribe({
        next: (myLikes) => {
          this.myLikes = myLikes;
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });

    // myWines
    this.userService
      .getProfile$()
      .pipe(
        mergeMap((user) => {
          return this.wineService.getMy$(user._id);
        })
      )
      .subscribe({
        next: (myWines) => {
          this.myWines = myWines;
        },
        error: (err) => {
          console.log(err.error.message);

        },
      });
  }
}
