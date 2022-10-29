import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, AfterViewInit {

  @ViewChild('registerForm') registerForm!: NgForm;
  @ViewChild('firstName') firstName!: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.firstName);
    // console.log(this.registerForm);
  }
  onSubmit(): void {
    this.firstName.value.trim()
    console.log(this.firstName);

  }
}
