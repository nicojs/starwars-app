import { Component, effect, signal } from '@angular/core';
import { TitleComponent } from './shared/title/title.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { AttractDirective } from './shared/attract.directive';
import { ContentDirective } from './shared/content.directive';

@Component({
    selector: 'sw-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, TitleComponent, MenuComponent, AttractDirective, ContentDirective],
})
export class AppComponent {
  title = 'star-wars';

  slogan = 'In a galaxy far, far away...';

  today = new Date();

  x = 0;
  y = 0;
  updatePosition(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  color = '';
  setColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.color = input.value;
  }

  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Count:', this.count());
    });
  }

  nextTick() {
    this.count.set(this.count() + 1);
  }
}
