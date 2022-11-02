import { AbstractControl, ValidatorFn } from "@angular/forms";

  
  export function sameValueValidateFactory(
    controlName: string,
    otherControl: AbstractControl,
    otherControlName: string
  ) {
    return function sameValueValidate(control: AbstractControl) {
      if (control.value !== otherControl?.value) {
        return {
          passwordsNotMatch: {
              [otherControlName]: otherControl?.value,
              [controlName]: control.value,
          },
        };
      }
      return null;
    };
  }
  

//   // OR:
//   export function passwordsMatching(passwordControl: AbstractControl) {
//     const validatorFn: ValidatorFn = (rePasswordControl: AbstractControl) => {
//       if (passwordControl.value !== rePasswordControl.value) {
//         return {
//           passwordsNotMatch: true,
//         };
//       }
  
//       return null;
//     };
  
//     return validatorFn;
//   }
