import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/shared/interfaces/wine';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, AfterViewInit {
  wine?: IWine 

  constructor(
    private activatedRoute: ActivatedRoute,
    private wineService: WineService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const wineId = params['wineId'];

      this.wineService.getOne$(wineId).subscribe((wine) => {
        this.wine = wine
      });
    });
  }

  ngAfterViewInit(): void {
    
  }
}
