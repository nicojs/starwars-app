import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from '../models/Episode';

@Pipe({
  name: 'episode',
  pure: false
})
export class EpisodePipe implements PipeTransform {

  transform(value: Episode, args?: any): any {
    console.log('Inside episode pipe');
    return `${value.title} (${value.releaseDate.getFullYear()})`;
  }
}
