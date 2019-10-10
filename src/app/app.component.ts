import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-libraries';

  onFilteredKeyup(event: string) {
    console.log('filtered keyup event');
    console.log(event);
  }
}
