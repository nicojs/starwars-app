import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const DEFAULT_COLOR = 'yellow';

@Directive({ selector: '[swAttract]', standalone: true })
export class AttractDirective {
  @Input('swAttract') bgColor!: string;
  @Input('swAttractBorder') border?: string;

  constructor(private el: ElementRef) {}

  get element(): HTMLElement {
    return this.el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.style.backgroundColor = this.bgColor || DEFAULT_COLOR;
    if(this.border) {
      this.element.style.border = this.border;
    }
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.style.backgroundColor = '';
    if (this.border) {
      this.element.style.border = '';
    }
  }
}
