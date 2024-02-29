import { Component, OnDestroy, inject } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { EpisodesService } from '../episodes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, interval, takeUntil } from 'rxjs';

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
    </ul> `,
  imports: [TitleComponent, CommonModule, RouterModule],
})
export class EpisodesPageComponent implements OnDestroy {
  episode$ = inject(EpisodesService).getAll();

  destroy$ = new Subject<void>();

  constructor() {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
