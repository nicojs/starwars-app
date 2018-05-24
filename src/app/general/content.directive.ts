import { Directive, Input, ElementRef, HostListener, AfterContentChecked, OnInit, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[swContent]'
})
export class ContentDirective implements AfterContentChecked, OnInit {

  @Input('swContent')
  content: any;

  @Output()
  swContentChange = new EventEmitter<string>();

  @HostListener('input', ['$event'])
  inputChanged(event) {
    if (this.element.innerText !== this.content) {
      this.content = this.element.innerText;
      this.swContentChange.emit(this.content);
    }
  }

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.element.contentEditable = 'true';
  }

  ngAfterContentChecked(): void {
    if (this.element.innerText !== this.content) {
      this.element.innerText = this.content;
    }
  }

  private get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

}
