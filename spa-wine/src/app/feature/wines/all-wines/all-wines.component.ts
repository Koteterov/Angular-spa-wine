import { Component, OnInit } from '@angular/core';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/shared/interfaces/wine';

@Component({
  selector: 'app-all-wines',
  templateUrl: './all-wines.component.html',
  styleUrls: ['./all-wines.component.css'],
})
export class AllWinesComponent implements OnInit {
  wineList: IWine[] = [];

  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.wineService.getAll$().subscribe((wines) => {
      this.wineList = wines;
    });
  }
}
