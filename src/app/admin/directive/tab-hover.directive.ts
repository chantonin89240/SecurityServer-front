import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTabHover]'
})
export class TabHoverDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = ''
 }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#C0C0C0')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
