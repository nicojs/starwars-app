import { Component, OnInit } from '@angular/core';
import { Character } from '../models/Character';

@Component({
  selector: 'sw-character-page',
  templateUrl: './character-page.component.html',
  styles: []
})
export class CharacterPageComponent implements OnInit {

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

  constructor() { }

  add(char: Character) {
    this.characters.push(char);
  }

  ngOnInit() {
  }

}
