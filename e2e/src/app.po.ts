import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  title() {
    return element(by.css('sw-root h1')).getText();
  }
}
