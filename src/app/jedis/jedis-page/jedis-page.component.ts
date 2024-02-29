import { Component, viewChild } from '@angular/core';
import { Jedi } from '../../models/jedi';
import { ToasterComponent, ToasterModule } from '../../toaster/toaster.component';
import { CommonModule } from '@angular/common';
import { AddJediComponent } from '../add-jedi/add-jedi.component';
import { JedisListComponent } from '../jedis-list/jedis-list.component';
import { MidichloreanPipe } from '../../midichlorean/midichlorean.pipe';
import { TitleComponent } from '../../shared/title/title.component';
import { JedisStore } from '../jedis.store';

@Component({
  selector: 'sw-jedis-page',
  standalone: true,
  imports: [
    CommonModule,
    MidichloreanPipe,
    TitleComponent,
    JedisListComponent,
    AddJediComponent,
    ToasterModule,
  ],
  templateUrl: 'jedis-page.component.html',
  styles: ``,
})
export class JedisPageComponent {
  constructor(jedisStore: JedisStore) {
    this.jedisStore = jedisStore;
  }
  jedisStore: JedisStore;

  toaster = viewChild.required(ToasterComponent);
  addJedi(jedi: Jedi) {
    this.jedisStore.add(jedi).subscribe(() => {
      this.toaster().notifyMessage('Jedi added', `Jedi ${jedi.name} added`);
    });
  }
}
