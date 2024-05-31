import { Directive, OnInit, Input, Output, EventEmitter, ElementRef, HostListener } from "@angular/core";

@Directive({ selector: '[swContent]', standalone: true })
export class ContentDirective implements OnInit {
  
  @Input() swContent!: string;
  @Output() swContentChange = new EventEmitter<string>();
  private el: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }
  ngOnInit(): void {
    this.el.contentEditable = 'true';
    this.el.innerText = this.swContent;
  }
  @HostListener('input')
  public update() {
    this.swContent = this.el.innerText;
    this.swContentChange.emit(this.swContent);
  }
}
