import { Component, Input } from '@angular/core';
import { MidichloreanPipe } from '../midichlorean/midichlorean.pipe';
import { Jedi } from '../jedi';

@Component({
  selector: 'sw-jedis-list',
  standalone: true,
  imports: [MidichloreanPipe],
  templateUrl: './jedis-list.component.html',
})
export class JedisListComponent {
  @Input({ required: true })
  jedis?: Jedi[] | null;
}
