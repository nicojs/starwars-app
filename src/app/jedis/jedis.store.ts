import { Injectable, signal } from '@angular/core';
import { Jedi } from './jedi';
import { JedisService } from './jedis.service';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JedisStore {
  #allJedis = signal<Jedi[]>([]);
  allJedis = this.#allJedis.asReadonly();
  loading = signal(true);

  constructor(private jedisService: JedisService) {
    jedisService.getAll().subscribe((jedis) => {
      this.#allJedis.set(jedis);
      this.loading.set(false);
    });
  }

  add(jedi: Jedi) {
    this.loading.set(true);
    return this.jedisService.add(jedi).pipe(
      tap((jedi) => {
        this.loading.set(false);
        this.#allJedis.update((jedis) => [...(jedis ?? []), jedi]);
      })
    );
  }
}
