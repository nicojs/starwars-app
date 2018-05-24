import { ElementFinder } from 'protractor';
import { PageObject } from '../general/PageObject';


export class EditEpisode extends PageObject {

  enterTitle(title: string) {
    return this.$('#titleInput').sendKeys(title);
  }

  enterReleaseDate(date: string) {
    return this.$('#releaseDateInput').sendKeys(date);
  }

  submit() {
    return this.$('.btn-primary').click();
  }
}
