import { Locator } from "@playwright/test";

export class JedisList {

  constructor(private host: Locator) {}

  getJedis() {
    return this.host.locator('li');
  }
}
