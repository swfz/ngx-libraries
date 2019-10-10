import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterKeyupEventsComponent } from './filter-keyup-events.component';

describe('FilterKeyupEventsComponent', () => {
  let component: FilterKeyupEventsComponent;
  let fixture: ComponentFixture<FilterKeyupEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterKeyupEventsComponent ]
    })
    .compileComponents();
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
