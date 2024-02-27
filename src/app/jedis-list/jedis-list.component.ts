import { Component, Inject, Input } from '@angular/core';
import { MidichloreanPipe } from '../midichlorean/midichlorean.pipe';
import { Jedi } from '../models/jedi';
import { JedisService } from '../jedis.service';
import { BACKEND_URL } from '../injection-tokens';

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
