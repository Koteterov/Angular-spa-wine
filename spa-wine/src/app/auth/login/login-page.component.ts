import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MessageBusService,
  MessageType,
} from 'src/app/core/services/message-bus.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  @ViewChild('email') email!: NgModel;

  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private messageBus: MessageBusService,
    private activatedRoute: ActivatedRoute
  ) {}

  handleLogin(): void {
    this.errorMessage = '';
    this.loginForm.value.password = this.loginForm.value.password.trim();

    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login$(this.loginForm.value).subscribe({
      next: () => {
        if (this.activatedRoute.snapshot.queryParams['retunUrl']) {
          this.router.navigateByUrl(
            this.activatedRoute.snapshot.queryParams['retunUrl']
          );
        } else {
          this.router.navigate(['/wine/my-wines']);
        }

        this.messageBus.notify({
          text: 'Successfully logged in',
          type: MessageType.Success,
        });
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      },
    });
  }
}
