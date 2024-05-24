import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from '../episode';
import { EpisodesService } from '../episodes.service';
import { EditEpisodeComponent } from '../edit-episode/edit-episode.component';

@Component({
  selector: 'sw-edit-episode-page',
  standalone: true,
  template: `<h2>Edit {{ episode?.title }}</h2>
    <form>
      @if(episode){
      <sw-edit-episode
        (episodeEdit)="this.edit($event)"
        [episode]="episode"
      ></sw-edit-episode>
      }
      <button type="button" class="btn btn-secondary" (click)="next()">
        Next
      </button>
    </form>`,
  styles: ``,
  imports: [EditEpisodeComponent],
})
export class EditEpisodePageComponent {
  episode?: Episode;

  episodeService = inject(EpisodesService);
  constructor(private route: ActivatedRoute, private router: Router) {
    route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.episodeService.get(id).subscribe((episode) => (this.episode = episode));
    });
  }

  @Input()
  set id(id: string) {
    console.log('id changed', id);
  }
  edit(episode: Episode) {
    this.episodeService.update(episode).subscribe(savedEpisode => {
      console.log(savedEpisode, 'edited');
    });
  }
  next() {
    const nextId = +this.route.snapshot.paramMap.get('id')! + 1;
    this.router.navigate(['/episodes', nextId]);
  }
}
