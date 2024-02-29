import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  input,
} from '@angular/core';
import { Episode } from '../episode';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { uniqueTitleValidator } from '../validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sw-edit-episode',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-episode.component.html',
  styles: ``,
})
export class EditEpisodeComponent implements OnChanges {
  episode = input.required<Episode>();

  @Output()
  episodeSubmitted = new EventEmitter<Episode>();

  form;
  constructor(fb: NonNullableFormBuilder) {
    this.form = fb.group({
      title: fb.control('', {
        validators: [Validators.required, forbid('The Rise of Skywalker')],
        asyncValidators: [uniqueTitleValidator(this.episode)],
      }),
      releaseYear: fb.control('', { validators: [Validators.required] }),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('episode' in changes) {
      this.form.reset(this.episode());
    }
  }

  get titleControl() {
    return this.form.controls.title;
  }

  save() {
    const updatedEpisode: Episode = {
      ...this.form.getRawValue(),
      id: this.episode().id,
    };
    this.episodeSubmitted.emit(updatedEpisode);
  }
}

function forbid(forbiddenValue: string): ValidatorFn {
  return (control: AbstractControl) => {
    const value = String(control.value);
    return value === forbiddenValue
      ? { forbid: { value, forbidden: forbiddenValue } }
      : null;
  };
}
