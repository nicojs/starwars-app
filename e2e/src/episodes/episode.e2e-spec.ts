import { EpisodePage } from './episode-page.po';

describe('Episode page', () => {
  let page: EpisodePage;

  beforeEach(async () => {
    page = new EpisodePage();
    await page.navigateTo();
  });

  it('it should be able to add an episode', async () => {
    const countBefore = await page.episodeList.table.rowCount();
    await page.edit.enterTitle('Foobar');
    await page.edit.enterReleaseDate('01/01/2012');
    await page.edit.submit();
    const countAfter = await page.episodeList.table.rowCount();
    expect(countAfter).toEqual(countBefore + 1);
  });

});
