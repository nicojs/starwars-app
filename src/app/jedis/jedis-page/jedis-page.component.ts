import { Component, viewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { JedisService } from '../jedis.service';
import { Jedi } from '../jedi';
import { ToasterComponent } from '../../shared/toaster/toaster.component';
import { AsyncPipe } from '@angular/common';
import { AddJediComponent } from '../add-jedi/add-jedi.component';
import { JedisListComponent } from '../jedis-list/jedis-list.component';
import { MidichloreanPipe } from '../midichlorean/midichlorean.pipe';
import { TitleComponent } from '../../shared/title/title.component';

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
    ]
})
export class JedisPageComponent {
  private fillJedis() {
    this.allJedis = this.jedisService.getAll();
  }
  constructor(jedisService: JedisService) {
    this.jedisService = jedisService;
    this.fillJedis();
  }

  allJedis?: Observable<Jedi[]>;
  jedisService: JedisService;


  toaster = viewChild.required(ToasterComponent);
  addJedi(jedi: Jedi) {
    this.jedisService.add(jedi).subscribe(() => {
      this.toaster().notifyMessage('Jedi added', `Jedi ${jedi.name} added`);
      this.fillJedis();
    });
  }
}
