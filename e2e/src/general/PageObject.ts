import { ElementFinder, by } from "protractor";


export abstract class PageObject {
  constructor(protected host: ElementFinder) { }

  $(selector: string) {
    return this.host.element(by.css(selector));
  }

  $$(selector: string) {
    return this.host.all(by.css(selector));
  }

}
