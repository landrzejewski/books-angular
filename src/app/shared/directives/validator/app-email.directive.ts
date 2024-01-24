import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[app-email][ngModel],[app-email][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AppEmailValidator), multi: true }
  ]
})
export class AppEmailValidator {

  private emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  private errorObject = { email: { hint: '(Correct email pattern: name@domain.com)'} };

  validate(control: FormControl) {
    return this.emailPattern.test(control.value) ? null : this.errorObject;
  }

}
