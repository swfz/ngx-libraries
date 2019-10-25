import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterKeyupEventsComponent } from './filter-keyup-events.component';
import { FilterKeyupEventsDirective } from '../../../../projects/filter-keyup-events/src/lib/directives/filter-keyup-events.directive';

describe('FilterKeyupEventsComponent', () => {
  let component: FilterKeyupEventsComponent;
  let fixture: ComponentFixture<FilterKeyupEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterKeyupEventsComponent, FilterKeyupEventsDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterKeyupEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
