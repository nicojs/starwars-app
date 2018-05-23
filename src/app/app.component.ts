import { Component } from '@angular/core';
import { Episode } from './models/Episode';
import { FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import { dateRange } from './validators/dateRange';
import { Character } from './models/Character';



@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  title = 'Star wars';



}
