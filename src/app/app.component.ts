import { Component } from '@angular/core';
import { Episode } from './models/Episode';
import { FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import { dateRange } from './validators/dateRange';
import { Character } from './models/Character';



@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newEpisodeForm: FormGroup;

  constructor() {
    this.newEpisodeForm = new FormGroup({
      title: new FormControl('', Validators.required),
      releaseDate: new FormControl(new Date(), dateRange(new Date(2010, 1, 1), new Date(2020, 1, 1)))
    });
  }

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

  characters: Character[] = [
    new Character(0, 'Han Solo', 63),
    new Character(1, 'Finn', 23),
    new Character(2, 'Princess Leia', 53),
    new Character(3, 'Luke Skywalker', 53),
    new Character(4, 'Qui-Gon Jinn', 60),
    new Character(5, 'Obi-Wan Kenobi', 57),
    new Character(6, 'Darth Maul', 32),
    new Character(7, 'Rey', 19),
    new Character(8, 'Mace Windu', 53),
    new Character(9, 'Shmi Skywalker', 5),
    new Character(10, 'R2-D2', 99)
  ];

  newCharacter = new Character(-1, '', null);
  saveEpisode() {
    if (this.newEpisodeForm.valid) {
      this.episodes.push(this.newEpisodeForm.value);
    }
  }
  saveCharacter(form: NgForm) {
    if (form.valid) {
      this.characters.push(this.newCharacter);
      this.newCharacter = new Character(-1, '', null);
    }
  }
}
