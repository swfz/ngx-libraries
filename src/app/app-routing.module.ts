import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterKeyupEventsComponent } from './pages/filter-keyup-events/filter-keyup-events.component';

const routes: Routes = [
  { path: 'filter-keyup-events', component: FilterKeyupEventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
