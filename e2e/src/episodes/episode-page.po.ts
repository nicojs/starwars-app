import { browser, $ } from 'protractor';
import { EpisodeList } from './episode-list.po';
import { EditEpisode } from './edit-episode.po';

export class EpisodePage {
  navigateTo() {
    return browser.get('/');
  }

  get edit() {
    return new EditEpisode($('sw-edit-episode'));
  }

  get episodeList() {
    return new EpisodeList($('sw-episode-list'));
  }
}
