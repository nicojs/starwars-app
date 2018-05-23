import { AppPage } from './app.po';

describe('Star wars', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display star wars title', async () => {
    await page.navigateTo();
    expect(await page.title()).toEqual('Star wars!');
  });

});
