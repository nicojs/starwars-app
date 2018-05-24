import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMinDirective } from './validators/custom-min-validator.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandler } from './HttpErrorHandler';
import { InputDirective } from './general/input.directive';
import { ContentDirective } from './general/content.directive';
import { CharacterModule } from './characters/character.module';
import { EpisodeModule } from './episodes/episode.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    CustomMinDirective,
    InputDirective,
    ContentDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EpisodeModule,
    CharacterModule,
    RouterModule.forRoot(routes)
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
