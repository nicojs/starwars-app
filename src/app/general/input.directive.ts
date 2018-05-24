import { Directive, Host, OnInit, ElementRef, AfterContentChecked } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: 'input[ngModel]'
})
export class InputDirective implements AfterContentChecked {

  constructor(@Host() private model: NgModel, private elementRef: ElementRef) {
  }

  ngAfterContentChecked(): void {
    this.valid = this.model.valid || this.model.untouched;
  }

  private update() {
    if (this.valid) {
      debugger;
      this.element.classList.remove('is-invalid');
    } else {
      debugger;
      this.element.classList.add('is-invalid');
    }
  }

  private get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  private _valid: boolean = true;
  private get valid() {
    return this._valid;
  }
  private set valid(valid) {
    if (this._valid !== valid) {
      this._valid = valid;
      this.update();
    }
  }

}
