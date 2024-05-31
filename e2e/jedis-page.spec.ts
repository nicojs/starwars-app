import { test, expect } from '@playwright/test';
import { JedisPage } from './po/jedis-page';

test.describe('Jedis Page', () => {
  let page: JedisPage;
  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new JedisPage(playwrightPage);
    await page.open();
  });

  test('should display a list of jedis', async () => {
    const jedis = page.jedisList.getJedis();
    await expect(jedis).toHaveCount(2);
  });

  test('should show a list of fruits', async ({ page }) => {
    await page.goto('http://localhost:4200');
    const fruitList = await page.$('fruit-list');
    const items = await fruitList!.$$('li');
    expect(items.length).toBe(3);
  });
});
