import { Inject, Injectable } from '@angular/core';
import { Jedi } from './jedi';
import { BACKEND_URL } from '../injection-tokens';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JedisService {
  private readonly url = `${this.backendUrl}/jedis`;
  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private http: HttpClient
  ) {}

  getAll(): Observable<Jedi[]> {
    return this.http.get<Jedi[]>(this.url);
  }

  add(jedi: Jedi) {
    return this.http.post(this.url, jedi);
  }
}


// [ { "name": "Obiwan", "midichlorean": 1200 } ]
