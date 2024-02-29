import { Page } from '@playwright/test';
import { JedisList } from './jedis-list';

export class JedisPage {

  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/jedis');
  }

  jedisList = new JedisList(this.page.locator('sw-jedis-list'));
}
