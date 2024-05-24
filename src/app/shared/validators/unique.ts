import { Signal } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, map } from 'rxjs';

export function unique<T extends { id: number }>(
  current: Signal<T>,
  search: (val: string) => Observable<T[]>
): AsyncValidatorFn {
  return (
    control: AbstractControl<string, string>
  ): Observable<{ unique: { existing: T } } | null> => {
    return search(control.getRawValue()).pipe(
      map((items) => {
        const existing = items.find((e) => e.id !== current().id);
        if (existing) {
          return { unique: { existing } };
        } else {
          return null;
        }
      })
    );
  };
}
