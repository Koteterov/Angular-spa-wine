import { Component, OnInit, ViewChild } from '@angular/core';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/shared/interfaces/wine';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-all-wines',
  templateUrl: './all-wines.component.html',
  styleUrls: ['./all-wines.component.css'],
})
export class AllWinesComponent implements OnInit {
  wineList: IWine[] = [];
  showSpinner: boolean = false;
  notFound: boolean = false;

  @ViewChild('searchForm') searchForm!: NgForm;

  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.wineService.getAll$().subscribe((wines) => {
      this.wineList = wines;
      this.showSpinner = false;
    });
  }
  handleSearch() {
    const searchString = this.searchForm.value.search;
    this.wineService.findWines$(searchString).subscribe((wines) => {
      this.wineList = wines;
      this.notFound = false;
      if (wines.length == 0) {
        this.notFound = true;
      }
    });
  }
}
