import { Component } from '@angular/core';
import { TitleComponent } from './shared/title/title.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./shared/menu/menu.component";

@Component({
    selector: 'sw-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, TitleComponent, MenuComponent],
})
export class AppComponent {
  title = 'star-wars';

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
}
