import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/shared/interfaces/wine';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  wine!: IWine;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wineService: WineService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // -- with Resolver --:
    this.wine = this.activatedRoute.snapshot.data['wine'];

    //// -- without Resolver --:
    // this.activatedRoute.params.subscribe((params) => {
    //   const wineId = params['wineId'];
    // this.wineService.getOne$(wineId).subscribe((wine) => {
    //   this.wine = wine
    // });
    // });
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
}
