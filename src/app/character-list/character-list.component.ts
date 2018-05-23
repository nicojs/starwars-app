import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/Character';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styles: []
})
export class CharacterListComponent implements OnInit {

  @Input()
  characters: Character[];

  constructor() { }

  ngOnInit() {
  }

}
