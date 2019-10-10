import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[libFilterKeyupEvents]'
})
export class FilterKeyupEventsDirective {

  constructor() {
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value: string) {
    console.log(value);
  }
}
