import { inject } from '@angular/core';
import { EpisodesService } from './episodes.service';
import { Observable, map } from 'rxjs';
import { Episode } from './episode';
import { AsyncValidatorFn } from '@angular/forms';

export function uniqueTitleValidator(
  currentEpisode$: { value: Episode | undefined }
): AsyncValidatorFn {
  const episodeService = inject(EpisodesService);

  return (
    control
  ): Observable<{ uniqueTitle: { existing: Episode } } | null> => {
    return episodeService.getAll().pipe(
      map((episodes) => {
        const existing = episodes.find(
          (e) => e.id !== currentEpisode$.value?.id && e.title === control.value
        );
        if (existing) {
          return { uniqueTitle: { existing } };
        } else {
          return null;
        }
      })
    );
  };
}
