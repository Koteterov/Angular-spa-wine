import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WineService } from 'src/app/core/services/wine.service';
import { IWine } from 'src/app/core/interfaces/wine';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @ViewChild('editForm') editForm!: NgForm;

  wine: IWine | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wineService: WineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const wineId = params['wineId'];
      this.wineService.getOne$(wineId).subscribe((wine) => {
        this.wine = wine;
      });
    });
  }

  handleEdit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const wineId = params['wineId'];
      this.wineService.edit$(wineId, this.editForm.value).subscribe({
        next: () => {
          // this.router.navigate([`details/${wineId}`]);
          this.router.navigate(['/wine/details', wineId]);
        },
        error: (err) => {
          console.log(err.error?.message);
        },
      });
    });
  }
}
