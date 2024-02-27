import { Component } from '@angular/core';
import { Jedi } from './models/jedi';
import { CommonModule } from '@angular/common';
import { MidichloreanPipe } from './midichlorean/midichlorean.pipe';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MidichloreanPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'star-wars';

  today = new Date();

  x = 0;
  y = 0;

  jedis: Jedi[] = [
    { name: 'Obiwan', midichlorean: 1_200 },
    { name: 'Luke Skywalker', midichlorean: 2_700 },
  ];

  newJedi: Jedi = { name: '', midichlorean: 0 };
  addJedi(form: NgForm) {
    if (form.valid) {
      this.jedis.push({ ...this.newJedi });
      form.resetForm();
    }
  }

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
