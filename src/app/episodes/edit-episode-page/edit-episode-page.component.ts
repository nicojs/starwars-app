import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from '../episode';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'sw-edit-episode-page',
  standalone: true,
  template: `<h2>Edit {{ episode?.title }}</h2>
    <form>
      <p>TODO: Add a form</p>
      <button type="submit" class="btn btn-primary me-3">Save</button>
      <button type="button" class="btn btn-secondary" (click)="next()">
        Next
      </button>
    </form>`,
  styles: ``,
})
export class EditEpisodePageComponent {
  episode?: Episode;

  constructor(private route: ActivatedRoute, private router: Router) {
    const episodeService = inject(EpisodesService);
    route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      episodeService.get(id).subscribe((episode) => (this.episode = episode));
    });
  }

  @Input()
  set id(id: string) {
    console.log('id changed', id);
  }

  next() {
    const nextId = +this.route.snapshot.paramMap.get('id')! + 1;
    this.router.navigate(['/episodes', nextId]);
  }
}
