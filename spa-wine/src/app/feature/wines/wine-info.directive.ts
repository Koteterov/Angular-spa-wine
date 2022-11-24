import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWineInfo]',
})
export class WineInfoDirective {
  @HostListener('mouseenter') mouseEnterHandler() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#e93535');
  }

  @HostListener('mouseleave') mouseLeaveHandler() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
}
