import { Component, OnInit, ViewChild } from '@angular/core';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/core/interfaces/wine';
import { NgForm, NgModel } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  mergeMap,
  Subject,
  tap,
} from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { tapResponse } from '@ngrx/component-store';

@Component({
  selector: 'app-all-wines',
  templateUrl: './all-wines.component.html',
  styleUrls: ['./all-wines.component.css'],
})
export class AllWinesComponent implements OnInit {
  wineList: IWine[] = [];
  showSpinner: boolean = false;
  notFound: boolean = false;

  searchUpdate = new Subject<string>();

  readonly pageSize = 5;
  currentPage: number = 0;
  startIndex: number = 0;
  totalInCollection: number = 0;
  value: string = '';

  @ViewChild('searchForm') searchForm!: NgForm;
  @ViewChild('paginatorSettings') paginator!: MatPaginator;

  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.wineService
      .getAll$(this.value, this.startIndex, this.pageSize)
      .subscribe({
        next: (wines) => {
          this.wineList = wines.result;
          this.totalInCollection = wines.totalPages;
          this.showSpinner = false;
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });

    //--search--
    this.searchUpdate
      .pipe(debounceTime(500), distinctUntilChanged())
      .pipe(
        mergeMap((value) => {
          this.value = value;
          return this.wineService.getAll$(
            value,
            this.startIndex,
            this.pageSize
          );
        })
      )
      .subscribe({
        next: (wines) => {
          this.wineList = wines.result;
          this.totalInCollection = wines.totalPages;
          this.paginator.firstPage();
          this.notFound = false;
          if (wines.result.length == 0) {
            this.notFound = true;
          }
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });
  }

  // //--search (other way...)--
  // handleSearch() {
  //   const searchString = this.searchForm.value.search;
  //   this.wineService.findWines$(searchString).subscribe((wines) => {
  //     this.wineList = wines.result;
  //     this.totalInCollection = wines.totalPages;
  //     this.paginator.firstPage()

  //     this.notFound = false;
  //     if (wines.result.length == 0) {
  //       this.notFound = true;
  //     }
  //   });
  // }

  paginatorHandler(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    this.wineService.getAll$(this.value, startIndex, event.pageSize).subscribe({
      next: (wines) => {
        this.wineList = wines.result;
        this.totalInCollection = wines.totalPages;
        this.showSpinner = false;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
