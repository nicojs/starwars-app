import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from '../episode';
import { EpisodesService } from '../episodes.service';
import { EditEpisodeComponent } from '../edit-episode/edit-episode.component';

@Component({
  selector: 'sw-edit-episode-page',
  standalone: true,
  templateUrl: './edit-episode-page.component.html',
  styles: ``,
  imports: [EditEpisodeComponent],
})
export class EditEpisodePageComponent {
  episode?: Episode;
  episodeService = inject(EpisodesService);
  constructor(route: ActivatedRoute, private router: Router) {
    route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.episodeService
        .get(id)
        .subscribe((episode) => (this.episode = episode));
    });
  }

  @Input()
  private id!: string;

  next() {
    const nextId = +this.id + 1;
    this.router.navigate(['/episodes', nextId]);
  }
  prev() {
    const nextId = +this.id - 1;
    this.router.navigate(['/episodes', nextId]);
  }
  
  updateEpisode(ep: Episode) {
    this.episodeService.update(ep).subscribe((updatedEpisode) => {
      this.episode = updatedEpisode;
      this.router.navigate(['/episodes']);
    });
  }
}
