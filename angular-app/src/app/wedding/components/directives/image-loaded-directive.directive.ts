import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[loaded]'
})
export class ImageLoadedDirectiveDirective {

  @Output() loaded = new EventEmitter();

  @HostListener('load')
  onLoad() {
    this.loaded.emit();
  }

  constructor(private elRef: ElementRef<HTMLImageElement>) {
    if (this.elRef.nativeElement.complete) {
      this.loaded.emit();
    }
  }
}
