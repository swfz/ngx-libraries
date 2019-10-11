import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterKeyupEventsModule } from '../../projects/filter-keyup-events/src/lib/filter-keyup-events.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FilterKeyupEventsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
