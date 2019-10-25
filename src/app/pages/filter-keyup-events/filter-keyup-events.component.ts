import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-keyup-events',
  templateUrl: './filter-keyup-events.component.html',
  styleUrls: ['./filter-keyup-events.component.scss']
})
export class FilterKeyupEventsComponent implements OnInit {
  events: string[] = [];

  constructor() {}

  ngOnInit() {}

  onFilteredKeyup(event: string) {
    console.log('filtered keyup event');
    this.events.push(event);
  }
}
