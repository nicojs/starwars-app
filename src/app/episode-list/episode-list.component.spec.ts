import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';
import { EpisodePipe } from '../episode/episode.pipe';
import { Episode } from '../models/Episode';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeListComponent, EpisodePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    await fixture.detectChanges();
  });

  it('should list 2 episodes', () => {
    component.episodes = [
      new Episode(1, 'Foobar', new Date(2010, 10, 1)),
      new Episode(2, 'Foobar2', new Date(2010, 11, 1))
    ];
    fixture.detectChanges();
    expect(nativeElement.querySelectorAll('tbody tr').length).toBe(2);
  });

  it('should not display a table if there are no episodes', () => {
    component.episodes = [];
    fixture.detectChanges();
    expect(nativeElement.querySelector('table'))
  });

  it('should also show the release year in the name', () => {
    component.episodes = [new Episode(0, 'foobar', new Date('2010-12-31')), new Episode(0, 'foobar', new Date('2011-1-1'))];
    fixture.detectChanges();
    const episodeNameElements = Array.from(nativeElement.querySelectorAll('tbody tr>td:first-child'));
    expect(episodeNameElements.map(el => el.textContent)).toEqual(['foobar (2010)', 'foobar (2011)'])
  });

});
