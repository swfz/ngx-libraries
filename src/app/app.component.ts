import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-libraries';
  events: string[] = [];

  onFilteredKeyup(event: string) {
    console.log('filtered keyup event');
    console.log(event);
    this.events.push(event);
  }
}
