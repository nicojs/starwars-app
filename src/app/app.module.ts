import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { EpisodePipe } from './episode/episode.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomMinDirective } from './custom-min-validator.directive';

registerLocaleData(localeNL);

@NgModule({
  declarations: [
    AppComponent,
    EpisodePipe,
    CustomMinDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
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
