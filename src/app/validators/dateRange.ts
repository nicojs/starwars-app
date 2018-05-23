import { ValidatorFn, AbstractControl } from '@angular/forms';

export function dateRange(min: Date, max: Date): ValidatorFn {

  return (control: AbstractControl) => {
    const val = control.value;
    if (val) {
      const date = new Date(val);
      if (date.getTime() < min.getTime()) {
        return {
          dateRange: `${date} should be greater than min value ${min}`
        };
      } else if (date.getTime() > max.getTime()) {
        return {
          dateRange: `${date} should be less than max value ${max}`
        };
      }
    }
    return null;
  };
}
