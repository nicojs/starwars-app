import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { EpisodePipe } from './episode/episode.pipe';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    EpisodePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'nl'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
