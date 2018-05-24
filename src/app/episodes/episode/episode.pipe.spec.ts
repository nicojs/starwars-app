import { EpisodePipe } from './episode.pipe';
import { Episode } from '../../models/Episode';

describe('Episode pipe', () => {

  let sut: EpisodePipe;

  beforeEach(() => {
    sut = new EpisodePipe();
  });

  it('should show the title and the year', () => {
    const input = new Episode(23, 'foobar', new Date(2010, 1, 1));
    const output = sut.transform(input);
    expect(output).toBe('foobar (2010)');
  });

  it('should show empty if value is absent', () => {
    const input = null;
    const output = sut.transform(input);
    expect(output).toBe('');
  });

  it('shouldn\'t show the year if no release date was set', () => {
    const input = new Episode(23, 'foobar', null);
    const output = sut.transform(input);
    expect(output).toBe('foobar');
  });
});
