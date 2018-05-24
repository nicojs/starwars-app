import { Routes } from '@angular/router';
import { CharacterPageComponent } from './characters/character-page/character-page.component';
import { EpisodePageComponent } from './episodes/episode-page/episode-page.component';
import { CharacterModule } from './characters/character.module';

export const routes: Routes = [
  { path: 'characters', loadChildren: './characters/character.module#CharacterModule' },
  { path: 'episodes', component: EpisodePageComponent },
  { path: '**', redirectTo: 'episodes' }
];
