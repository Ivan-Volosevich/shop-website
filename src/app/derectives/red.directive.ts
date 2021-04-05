import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.display = 'red';
  }

}
