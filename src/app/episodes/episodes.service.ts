import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from './episode';
import { BACKEND_URL } from '../injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  http = inject(HttpClient);
  url = `${inject(BACKEND_URL)}/episodes`;

  getAll(): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.url);
  }

  get(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.url}/${id}`);
  }

  update(episode: Episode): Observable<Episode> {
    return this.http.put<Episode>(`${this.url}/${episode.id}`, episode);
  }
}
