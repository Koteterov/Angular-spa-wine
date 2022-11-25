import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap, Observable, tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { WineService } from 'src/app/core/services/wine.service';
import { IUser } from 'src/app/core/interfaces/user';
import { IWine } from 'src/app/core/interfaces/wine';
import { IRootState } from 'src/app/+store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser!: IUser;
  myLikes$!: Observable<IWine[]>;
  myWines$!: Observable<IWine[]>;

  constructor(
    private userService: UserService,
    private router: Router,
    private wineService: WineService,
    private store: Store<IRootState>
  ) {}

  ngOnInit(): void {

    // myWines
    this.myWines$ = this.store
      .select((state) => state.currentUser)
      .pipe(
        mergeMap((user) => {
          return this.wineService.getMy$(user?._id);
        })
      );

    // myLikes
    this.myLikes$ = this.userService.getProfile$().pipe(
      mergeMap((user) => {
        this.currentUser = user;
        if (user) {
          return this.wineService.getMyLikes$(user._id);
        }
        return [];
      })
    );
  }
}
