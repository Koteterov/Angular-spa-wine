import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { WineService } from 'src/app/core/services/wine.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @ViewChild('creatForm') creatForm!: NgForm;

  errorMessage: string = '';

  constructor(private wineService: WineService, private router: Router) {}

  ngOnInit(): void {}

  handleCreate(): void {
    this.errorMessage = '';

    this.wineService.create$(this.creatForm.value).subscribe({
      next: (wine) => {
        this.router.navigate(['home'])
        console.log(wine);
      },
      error: (err) => {
        this.errorMessage = err.error.message
        console.log(this.errorMessage);
      }
    })

  }
}
