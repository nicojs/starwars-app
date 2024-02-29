import { Component, input } from '@angular/core';
import { MidichloreanPipe } from '../../midichlorean/midichlorean.pipe';
import { Jedi } from '../../models/jedi';

@Component({
  selector: 'sw-jedis-list',
  standalone: true,
  imports: [MidichloreanPipe],
  templateUrl: './jedis-list.component.html',
})
export class JedisListComponent {
  jedis = input.required<Jedi[]>();
}
