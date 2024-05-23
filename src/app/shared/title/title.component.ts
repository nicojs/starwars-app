import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sw-title',
  template: `
    @switch (level) { @case('1') {
    <h1 class="display-1">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </h1>
    } @case('2') {
    <h2><ng-container *ngTemplateOutlet="content"></ng-container></h2>
    } }
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  imports: [CommonModule],
})
export class TitleComponent {
  @Input()
  level: '1' | '2' = '1';
}
