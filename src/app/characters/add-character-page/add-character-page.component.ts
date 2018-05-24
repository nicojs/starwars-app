import { Component, OnInit } from '@angular/core';
import { Character, CharacterJson } from '../../models/Character';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add-character-page.component.html',
  styles: []
})
export class AddCharacterPageComponent {

  constructor(private http: HttpClient, private router: Router) { }

  add(char: Character) {
    // This should normally be done in the backend, for demo sake doing it here (json-server isn't *that* smart)
    delete char.id;
    this.http.post<CharacterJson>('http://localhost:3111/characters', char).pipe(
      map(char => new Character(char.id, char.name, char.age))
    )
      .subscribe(char => {
        this.router.navigate(['list']);
      });
  }
}
