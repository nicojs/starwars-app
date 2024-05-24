import {
  Component,
  EventEmitter,
  Output,
  effect,
  inject,
  input,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Episode } from '../episode';
import { forbid } from '../../shared/validators/forbid';
import { unique } from '../../shared/validators/unique';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'sw-edit-episode',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-episode.html',
  styles: `
  input.ng-invalid.ng-touched {
  border: 2px dotted red;
}
input.ng-valid.ng-touched {
  border: 2px solid limegreen;
}`,
})
export class EditEpisodeComponent {
  episode = input.required<Episode>();

  @Output()
  episodeEdit = new EventEmitter<Episode>();

  constructor() {
    effect(() => {
      const { id, ...episodeValues } = this.episode();
      this.episodeForm.setValue(episodeValues);
      console.log('Nieuwe episode', this.episode());
    });
    this.episodeForm.valueChanges.subscribe((v) => {
      console.log('changes', v);
    });
  }

  formBuilder = inject(NonNullableFormBuilder);
  episodeService = inject(EpisodesService);
  episodeForm = this.formBuilder.group({
    title: this.formBuilder.control('', {
      validators: [Validators.required, forbid('The Rise of Skywalker')],
      asyncValidators: [
        unique(this.episode, (text) => this.episodeService.search(text)),
      ],
    }),
    releaseYear: this.formBuilder.control('', {
      validators: [Validators.required, Validators.pattern(/\d{4}/)],
    }),
  });

  submitEpisode() {
    if (this.episodeForm.valid) {
      this.episodeEdit.emit({
        id: this.episode().id,
        ...this.episodeForm.getRawValue(),
      });
    }
  }

  get yearControl() {
    return this.episodeForm.controls.releaseYear;
  }
  get titleControl() {
    return this.episodeForm.controls.title;
  }
}
