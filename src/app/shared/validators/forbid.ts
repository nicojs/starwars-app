import { ValidatorFn, AbstractControl } from "@angular/forms";

export function forbid(forbiddenValue: string): ValidatorFn {
  return (control: AbstractControl) => {
    const value = String(control.value);
    return value === forbiddenValue
      ? { forbid: { value, forbidden: forbiddenValue } }
      : null;
  };
}
