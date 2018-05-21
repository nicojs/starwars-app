import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from '../models/Episode';

@Pipe({
  name: 'episode',
  pure: false
})
export class EpisodePipe implements PipeTransform {

  transform(value: Episode, args?: any): any {
    if (value) {
      return `${value.title}${this.year(value.releaseDate)}`;
    } else {
      return '';
    }
  }

  private year(value: Date) {
    if (value) {
      return ` (${value.getFullYear()})`;
    } else {
      return '';
    }
  }
}
