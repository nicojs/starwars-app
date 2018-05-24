import { ElementFinder, by } from "protractor";

export class Table {
  constructor(private host: ElementFinder) { }

  rowCount() {
    return this.host.all(by.css('tbody tr')).count();
  }
}
