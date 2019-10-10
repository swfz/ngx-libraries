import { NgModule } from '@angular/core';
import { FilterKeyupEventsComponent } from './filter-keyup-events.component';
import { FilterKeyupEventsDirective } from './directives/filter-keyup-events.directive';



@NgModule({
  declarations: [FilterKeyupEventsComponent, FilterKeyupEventsDirective],
  imports: [
  ],
  exports: [FilterKeyupEventsComponent, FilterKeyupEventsDirective]
})
export class FilterKeyupEventsModule { }
