import { EditCharacterComponent } from './edit-character/edit-character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddCharacterPageComponent } from './add-character-page/add-character-page.component';
import { CharacterListPageComponent } from './character-list-page/character-list-page.component';


@NgModule({
  declarations: [
    EditCharacterComponent,
    CharacterListComponent,
    CharacterPageComponent,
    AddCharacterPageComponent,
    CharacterListPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: 'characters', children: [
          { path: 'list', component: CharacterListPageComponent },
          { path: 'add', component: AddCharacterPageComponent },
          { path: '**', redirectTo: 'list' }
        ]
      }
    ])
  ],
  exports: [
    CharacterPageComponent
  ]
})
export class CharacterModule {

}
