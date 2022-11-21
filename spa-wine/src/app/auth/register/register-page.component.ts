import { Component, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { sameValueValidateFactory } from '../util';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;

  errorMessage: string = '';

  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: this.passwordControl,
      rePassword: new FormControl(null),
    });

    const sameValueValidate = sameValueValidateFactory(
      'rePassword',
      this.registerForm.get('password')!,
      'password'
    );

    this.registerForm.controls['rePassword'].setValidators([
      Validators.required,
      Validators.minLength(5),
      sameValueValidate,
    ]);
  }

  ngOnInit(): void {
    this.registerForm.get('rePassword')!.valueChanges.subscribe(console.log);
  }

  handleRegister(): void {
    this.errorMessage = '';

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.register$(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(['/wine/my-wines']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      },
    });
  }
}
