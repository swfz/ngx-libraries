import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  withLatestFrom
} from 'rxjs/operators';

export interface InputText {
  value: string;
}
export type IndexedInputText = [number, InputText];
export type TwoIndexAndText = [IndexedInputText, IndexedInputText];
export type BeforeAfterInputText = [string, string];

@Directive({
  selector: '[libFilterKeyupEvents]'
})
export class FilterKeyupEventsDirective implements OnInit {
  private inputTexts$!: Subject<InputText>;
  private interval$!: Observable<number>;
  filterText$: Observable<[string, string]>;

  @Input()
  intervalMs?: number;

  @Output() filteredKeyup: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.intervalMs);
    this.interval$ = interval(this.intervalMs);
    this.inputTexts$ = new Subject<InputText>();
    this.filterText$ = this.createFilterTextObservable(
      this.interval$,
      this.inputTexts$
    );

    this.filterText$.subscribe(p => {
      console.log(p);
      this.filteredKeyup.emit(p[0]);
    });
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value: string) {
    this.inputTexts$.next({ value });
  }

  createFilterTextObservable(intervalStream, inputTextStream) {
    return intervalStream.pipe(
      withLatestFrom(inputTextStream),
      pairwise(),
      map(this.deleteIndex),
      filter(this.sillenceValue),
      distinctUntilChanged(this.distinct)
    );
  }

  private deleteIndex(v: TwoIndexAndText): BeforeAfterInputText {
    return [v[0][1].value, v[1][1].value];
  }

  private sillenceValue(v: BeforeAfterInputText) {
    return v[0] === v[1];
  }

  private distinct(a: BeforeAfterInputText, b: BeforeAfterInputText) {
    return a[1] === b[1];
  }
}
