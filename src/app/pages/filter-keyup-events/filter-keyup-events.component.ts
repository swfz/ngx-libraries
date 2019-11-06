import { Component, OnInit } from '@angular/core';

interface InputEvent {
  value: string;
  time: string;
}

@Component({
  selector: 'app-filter-keyup-events',
  templateUrl: './filter-keyup-events.component.html',
  styleUrls: ['./filter-keyup-events.component.scss']
})
export class FilterKeyupEventsComponent implements OnInit {
  events: InputEvent[] = [];
  intervalMs = 1000;

  constructor() {}

  ngOnInit() {}

  onFilteredKeyup(event: string) {
    console.log('filtered keyup event');
    this.events.push({ value: event, time: new Date().getTime().toString() });
  }
}
