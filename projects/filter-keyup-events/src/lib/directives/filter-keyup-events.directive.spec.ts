import { FilterKeyupEventsDirective } from './filter-keyup-events.directive';
import { cold, hot } from 'jest-marbles';

describe('FilterKeyupEventsDirective', () => {
  it('should create an instance', () => {
    const directive = new FilterKeyupEventsDirective();
    expect(directive).toBeTruthy();

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
});
