import { Component, OnInit } from '@angular/core';

interface EventLog {
  event: string;
  time: number;
}
@Component({
  selector: 'app-filter-keyup-events',
  templateUrl: './filter-keyup-events.component.html',
  styleUrls: ['./filter-keyup-events.component.scss']
})
export class FilterKeyupEventsComponent implements OnInit {
  eventLogs: EventLog[] = [];

  constructor() {}

  ngOnInit() {}

  onFilteredKeyup(event: string) {
    console.log('filtered keyup event');
    this.eventLogs.push({ event, time: Date.now() });
  }
}
