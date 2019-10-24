import { FilterKeyupEventsDirective } from './filter-keyup-events.directive';
import { cold, hot } from 'jest-marbles';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <input
      id="test-input"
      libFilterKeyupEvents
      [intervalMs]="500"
      (filteredKeyup)="onFilteredKeyup($event)"
    />
  `
})
class TestComponent {
  events: string[] = [];
  onFilteredKeyup(e): void {
    this.events.push(e);
  }
}

describe('FilterKeyupEventsDirective', () => {
  test('should create an instance', () => {
    const directive = new FilterKeyupEventsDirective();
    expect(directive).toBeTruthy();
  });

  test('should input text stream', () => {
    const directive = new FilterKeyupEventsDirective();
    // 30ms interval
    const interval = hot('1--2--3--4--5--6--7--8--9--');
    const input = hot('a------b---c---------------', {
      a: { value: 'a' },
      b: { value: 'ab' },
      c: { value: 'abc' }
    });
    const expected = cold('------a--------b-----------', {
      a: ['a', 'a'],
      b: ['abc', 'abc']
    });
    const actual = directive.createFilterTextObservable(interval, input);
    expect(actual).toBeObservable(expected);
  });

  test('whether an event is returned from a directive invoked via a component', async () => {
    TestBed.configureTestingModule({
      declarations: [FilterKeyupEventsDirective, TestComponent]
    }).compileComponents();
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
      TestComponent
    );
    const component: TestComponent = fixture.componentInstance;

    expect(component).toBeTruthy();
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;

    el.value = 'hoge';
    el.dispatchEvent(new Event('keyup'));

    expect(fixture.componentInstance.events).toEqual([]);
    await new Promise(r => setTimeout(r, 1000));
    expect(fixture.componentInstance.events).toEqual(['hoge']);
  });
});
