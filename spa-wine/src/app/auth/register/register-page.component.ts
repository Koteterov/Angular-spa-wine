import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);


  registerForm: FormGroup = this.formBuilder.group({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: this.passwordControl,
    rePassword: new FormControl(null, [Validators.required, passwordsMatching(this.passwordControl)]),

    // passwords: new FormGroup ({

    // }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}


  onSubmit(): void {
    console.log(this.registerForm.value);
    // this.registerForm.reset()
  }

}


function passwordsMatching(password: AbstractControl) {
  const validatorFn: ValidatorFn = (rePassword: AbstractControl) => {
      if (password.value !== rePassword.value) {
          return {
            passwordsNotMatch: true
          }
      }

      return null;
  }

  return validatorFn;
}

