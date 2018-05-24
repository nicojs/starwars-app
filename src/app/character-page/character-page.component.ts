import { Component, OnInit } from '@angular/core';
import { Character, CharacterJson } from '../models/Character';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sw-character-page',
  templateUrl: './character-page.component.html',
  styles: []
})
export class CharacterPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  characters: Character[];

  add(char: Character) {
    // This should normally be done in the backend, for demo sake doing it here (json-server isn't *that* smart)
    delete char.id;
    this.http.post<CharacterJson>('http://localhost:3111/characters', char).pipe(
      map(char => new Character(char.id, char.name, char.age))
    )
    .subscribe(char => {
      this.characters.push(char);
    });
  }

  ngOnInit() {
    this.http.get<CharacterJson[]>('http://localhost:3111/characters').pipe(
      map(characters => characters.map(c => new Character(c.id, c.name, c.age)))
    ).subscribe(characters => this.characters = characters);
  }

}
