import { ElementFinder, by } from 'protractor';
import { Table } from '../general/table.po';

export class EpisodeList {
  constructor(private host: ElementFinder) {
    this.table = new Table(host.element(by.css('table')));
  }

  table: Table;
}
