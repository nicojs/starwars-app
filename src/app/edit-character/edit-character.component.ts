import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../models/Character';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sw-edit-character',
  templateUrl: './edit-character.component.html',
  styles: []
})
export class EditCharacterComponent implements OnInit {
  newCharacter = new Character(-1, '', null);

  @Output()
  saved = new EventEmitter<Character>();

  constructor() { }

  ngOnInit() {
  }

  saveCharacter(form: NgForm) {
    if (form.valid) {
      this.saved.emit(this.newCharacter);
      this.newCharacter = new Character(-1, '', null);
      form.reset();
    }
  }
}
