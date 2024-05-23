import { Component, inject } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { EpisodesService } from '../episodes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sw-episodes-page',
  standalone: true,
  template: `<sw-title level="2">All Episodes</sw-title>
    <ul>
      @for(episode of episode$ | async; track episode.id) {
      <li>
        <a [routerLink]="['/episodes', episode.id]"> {{ episode.title }}</a>
      </li>
      }
    </ul>`,
  imports: [TitleComponent, CommonModule, RouterModule],
})
export class EpisodesPageComponent {
  episode$ = inject(EpisodesService).getAll();
}
