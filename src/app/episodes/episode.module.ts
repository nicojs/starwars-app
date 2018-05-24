
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EpisodePipe } from './episode/episode.pipe';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { EditEpisodeComponent } from './edit-episode/edit-episode.component';

@NgModule({
  declarations: [
    EpisodePipe,
    EpisodeListComponent,
    EditEpisodeComponent,
    EpisodePageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    EpisodePageComponent
  ]
})
export class EpisodeModule {

}
