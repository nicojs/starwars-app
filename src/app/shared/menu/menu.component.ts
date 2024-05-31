import { Component } from '@angular/core';

@Component({
  selector: 'sw-menu',
  template: `
    <nav>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/jedis"
            >Jedis</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" routerLink="/episodes"
            >Episodes</a
          >
        </li>
      </ul>
    </nav>
  `,
})
export class MenuComponent {}
