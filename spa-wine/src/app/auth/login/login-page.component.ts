import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms' 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('loginForm') loginForm!: NgForm; 
  @ViewChild('email') email!: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    console.log(this.email);

  }
}
