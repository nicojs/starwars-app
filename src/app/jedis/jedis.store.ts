import { Injectable, inject, signal } from '@angular/core';
import { JedisService } from './jedis.service';
import { Jedi } from '../models/jedi';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JedisStore {
  #service = inject(JedisService);
  #jedis = signal<Jedi[] | undefined>(undefined);
  #jedisSubject = new BehaviorSubject<Jedi[] | undefined>(undefined);

  readonly jedis = this.#jedis.asReadonly();
  readonly jedisFromSubject = this.#jedisSubject.asObservable();

  constructor() {
    this.#service.getAll().subscribe((jedis) => {
      this.#jedis.set(jedis);
      this.#jedisSubject.next(jedis);
    });
  }

  add(jedi: Jedi): Observable<Jedi> {
    return this.#service.add(jedi).pipe(
      tap((addedJedi) => {
        const jedis = this.#jedis();
        this.#jedis.set([...(jedis ?? []), addedJedi]);
        this.#jedisSubject.next(this.#jedis());
      })
    );
  }
}
