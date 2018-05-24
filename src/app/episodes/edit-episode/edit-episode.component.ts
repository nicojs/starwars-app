import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateRange } from '../../validators/dateRange';
import { Episode } from '../../models/Episode';

@Component({
  selector: 'sw-edit-episode',
  templateUrl: './edit-episode.component.html',
})
export class EditEpisodeComponent implements OnInit {

  @Output()
  edited = new EventEmitter<Episode>();

  episodeForm = new FormGroup({
    title: new FormControl('', Validators.required),
    releaseDate: new FormControl(new Date(), dateRange(new Date(2010, 1, 1), new Date(2020, 1, 1)))
  });

  constructor() { }

  ngOnInit() {
  }

  saveEpisode() {
    if (this.episodeForm.valid) {
      this.edited.emit(new Episode(0, this.episodeForm.value.title, new Date(this.episodeForm.value.releaseDate)));
      this.episodeForm.reset();
    }
  }
}
