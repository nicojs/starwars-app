import { Component } from '@angular/core';
import { Episode } from './models/Episode';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star wars';

  episodes: Episode[] = [
    new Episode(0, 'A New Hope', new Date('1977-5-25')),
    new Episode(1, 'The Empire Strikes Back', new Date('1980-5-21')),
    new Episode(2, 'Return of the Jedi', new Date('1983-5-25')),
    new Episode(3, 'The Phantom Menace', new Date('1999-5-19')),
    new Episode(4, 'Attack of the Clones', new Date('2002-5-16')),
    new Episode(5, 'Revenge of the Sith', new Date('2005-5-19')),
    new Episode(6, 'The Force Awakens', new Date('2015-12-14')),
    new Episode(7, 'The Last Jedi', new Date('2017-12-15'))
  ];
}
