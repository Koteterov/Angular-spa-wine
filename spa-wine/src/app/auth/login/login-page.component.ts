import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageBusService, MessageType } from 'src/app/core/services/message-bus.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  @ViewChild('email') email!: NgModel;

  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private messageBus: MessageBusService
  ) {}

  ngOnInit(): void {}

  handleLogin(): void {
    this.errorMessage = '';

    this.userService.login$(this.loginForm.value).subscribe({
      next: (user) => {
        this.router.navigate(['home']);
        
        this.messageBus.notify({text: "Successfully logged in", type: MessageType.Success})
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      },
    });
  }
}
