import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../models/Episode';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateRange } from '../validators/dateRange';

@Component({
  selector: 'sw-episode-list',
  templateUrl: './episode-list.component.html'
})
export class EpisodeListComponent implements OnInit {

  @Input()
  episodes: Episode[];

  ngOnInit() {
  }
}
