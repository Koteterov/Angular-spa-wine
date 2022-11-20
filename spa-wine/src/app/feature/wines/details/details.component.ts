import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { map, mergeMap, Observable, pipe } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { WineService } from 'src/app/core/services/wine.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { IWine } from 'src/app/shared/interfaces/wine';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ComponentStore],
})
export class DetailsComponent implements OnInit {
  wine!: IWine;
  user$: Observable<IUser | undefined> = this.userService.currentUser$;
  isCreator: boolean = false;
  totalLikes: number = 0;
  hasLiked!: boolean;
  peopleLiked!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wineService: WineService,
    private userService: UserService,
    private route: Router,
    // private componentStore: ComponentStore<{ wine: IWine}>
    ) 
  {}

  ngOnInit(): void {
    // -- with Resolver --:
    this.wine = this.activatedRoute.snapshot.data['wine'];
    this.totalLikes = this.wine.likesList.length;
    this.peopleLiked = this.wine.likesList.map((x) => x.email).join(', ');

    //// -- without Resolver -- mergeMap!!
    // this.activatedRoute.params.subscribe((params) => {
    //   const wineId = params['wineId'];
    // this.wineService.getOne$(wineId).subscribe((wine) => {
    //   this.wine = wine
    // });
    // });

    this.user$.subscribe((user) => {
      this.isCreator = user?._id == this.wine._ownerId._id;
      this.hasLiked = this.wine.likesList.some((x) => x._id == user?._id);
    });
  }

  deleteHandler(): void {
    const wineId = this.activatedRoute.snapshot.data['wine']._id;

    this.wineService.deleteOne$(wineId).subscribe({
      next: () => {
        this.route.navigate(['/wine/all']);
      },
      error: (err) => {
        console.log(err.error?.message);
      },
    });
  }

  // TODO - state for likes

  likeHandler(): void {
    const wineId = this.activatedRoute.snapshot.data['wine']._id;
    this.wineService
      .likeWine$(wineId)
      .pipe(
        mergeMap((wine) => {
          return this.wineService.getOne$(wine._id);
        })
      )
      .subscribe((wine) => {
        this.totalLikes = wine.likesList.length;
        this.hasLiked = true;
        this.peopleLiked = wine.likesList.map((x) => x.email).join(', ');
      });
  }

  unlikeHandler(): void {
    const wineId = this.activatedRoute.snapshot.data['wine']._id;
    this.wineService
      .unlikeWine$(wineId)
      .pipe(
        mergeMap(() => {
          return this.wineService.getOne$(wineId); // wineId => wine._id no longer exists
        })
      )
      .subscribe((wine) => {
        this.totalLikes = wine.likesList.length;
        this.hasLiked = false;
        this.peopleLiked = wine.likesList.map((x) => x.email).join(', ');
      });
  }
}
