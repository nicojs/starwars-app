import { Component, OnInit } from '@angular/core';
import { Episode, EpisodeJson } from '../../models/Episode';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sw-episode-page',
  templateUrl: './episode-page.component.html'
})
export class EpisodePageComponent implements OnInit {

  episodes: Episode[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<EpisodeJson[]>('http://localhost:3111/episodes').pipe(
      map(episodes => episodes.map(e => new Episode(e.id, e.title, new Date(e.releaseDate))))
    ).subscribe(episodes => this.episodes = episodes);
  }

  saveEpisode(episode: Episode) {
    // This should normally be done in the backend, for demo sake doing it here (json-server isn't *that* smart)
    delete episode.id;
    this.http.post<EpisodeJson>('http://localhost:3111/episodes', episode).pipe(
      map(ep => new Episode(ep.id, ep.title, new Date(ep.releaseDate)))
    ).subscribe(episode => this.episodes.push(episode));
  }

}
