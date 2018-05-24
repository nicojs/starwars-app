import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { EpisodePipe } from './episode/episode.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMinDirective } from './validators/custom-min-validator.directive';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandler } from './HttpErrorHandler';
import { InputDirective } from './general/input.directive';
import { ContentDirective } from './general/content.directive';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    EpisodePipe,
    CustomMinDirective,
    EpisodeListComponent,
    EpisodePageComponent,
    EditEpisodeComponent,
    EditCharacterComponent,
    CharacterListComponent,
    CharacterPageComponent,
    InputDirective,
    ContentDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'nl'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
