import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const DEFAULT_COLOR = 'yellow';

@Directive({ selector: '[swAttract]', standalone: true })
export class AttractDirective {
  @Input({ alias: 'swAttract', required: true })
  bgColor!: string;

  @Input()
  swBorder?: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || DEFAULT_COLOR;
    this.el.nativeElement.style.border = this.swBorder ?? '';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.border = '';
  }
}
