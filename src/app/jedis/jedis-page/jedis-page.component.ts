import { Component, DestroyRef, inject, viewChild } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { Jedi } from '../jedi';
import { ToasterComponent } from '../../shared/toaster/toaster.component';
import { AsyncPipe } from '@angular/common';
import { AddJediComponent } from '../add-jedi/add-jedi.component';
import { JedisListComponent } from '../jedis-list/jedis-list.component';
import { MidichloreanPipe } from '../midichlorean/midichlorean.pipe';
import { TitleComponent } from '../../shared/title/title.component';
import { JedisStore } from '../jedis.store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'sw-jedis-page',
  standalone: true,
  templateUrl: 'jedis-page.component.html',
  styles: ``,
  imports: [
    AsyncPipe,
    MidichloreanPipe,
    TitleComponent,
    JedisListComponent,
    AddJediComponent,
    ToasterComponent,
  ],
})
export class JedisPageComponent {
  private jedisStore = inject(JedisStore);
  destroy$ = new Subject<void>();

  allJedis = this.jedisStore.allJedis;
  loading = this.jedisStore.loading;

  toaster = viewChild.required(ToasterComponent);
  destroyRef = inject(DestroyRef);

  constructor() {
    interval(1000).pipe(takeUntilDestroyed()).subscribe(console.log);
  }

  addJedi(jedi: Jedi) {
    this.jedisStore
      .add(jedi)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.toaster().notifyMessage('Jedi added', `Jedi ${jedi.name} added`);
        },
        error: (error) => this.toaster().notifyMessage('Error', error.message),
      });
  }
}
