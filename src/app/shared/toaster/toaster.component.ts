import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'sw-toaster',
  template: `
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        class="toast {{ displayState }}"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="me-auto">{{ title }}</strong>
          <small>Just now</small>
          <button
            (click)="hide()"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">{{ message }}</div>
      </div>
    </div>
  `,
})
export class ToasterComponent {
  message = '';
  title = '';

  displayState: 'show' | 'hide' = 'hide';
  private currentTimeout?: number;

  notifyMessage(title: string, msg: string) {
    this.title = title;
    this.message = msg;
    this.displayState = 'show';
    clearTimeout(this.currentTimeout);
    this.currentTimeout = setTimeout(() => this.hide(), 3000);
  }
  hide() {
    this.displayState = 'hide';
  }
}

@NgModule({
  declarations: [ToasterComponent],
  exports: [ToasterComponent]
})
export class ToasterModule {}
