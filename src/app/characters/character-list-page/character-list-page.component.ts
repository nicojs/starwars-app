import { Component, OnInit } from '@angular/core';
import { Character, CharacterJson } from '../../models/Character';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sw-character-list-page',
  templateUrl: './character-list-page.component.html',
  styles: []
})
export class CharacterListPageComponent implements OnInit {
  characters: Character[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<CharacterJson[]>('http://localhost:3111/characters').pipe(
      map(characters => characters.map(c => new Character(c.id, c.name, c.age)))
    ).subscribe(characters => this.characters = characters);
  }
}
