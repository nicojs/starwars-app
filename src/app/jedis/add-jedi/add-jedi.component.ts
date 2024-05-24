import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Jedi, createJedi } from '../jedi';

@Component({
  selector: 'sw-add-jedi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-jedi.component.html',
  styles: [
    `
      input.ng-invalid.ng-touched {
        border: 2px dotted red;
      }
    `,
  ],
})
export class AddJediComponent {

  @Output()
  jediAdded = new EventEmitter<Jedi>();

  newJedi: Jedi = createJedi({ name: '', midichlorean: 0 });
  addJedi(form: NgForm) {
    if (form.valid) {
      this.jediAdded.emit({ ...this.newJedi });
      form.resetForm();
    }
  }
}
