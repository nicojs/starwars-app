import { Pipe, PipeTransform } from '@angular/core';

export type MidichloreanFormat = 'long' | 'short';

@Pipe({ name: 'midichlorean', standalone: true })
export class MidichloreanPipe implements PipeTransform {
  transform(value: number, format: MidichloreanFormat = 'short') {
    if (format === 'short') {
      return `${value} mc`;
    } else {
      return `${value} midichloreans`;
    }
  }
}
