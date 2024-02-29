import { Route } from '@angular/router';
import { EpisodesPageComponent } from './episodes/episodes-page/episodes-page.component';
import { JedisPageComponent } from './jedis/jedis-page/jedis-page.component';
import { EditEpisodePageComponent } from './episodes/edit-episode-page/edit-episode-page.component';

export const appRoutes: Route[] = [
  { path: 'episodes', component: EpisodesPageComponent },
  { path: 'episodes/:id', component: EditEpisodePageComponent },
  { path: 'jedis', component: JedisPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'jedis'}
];
