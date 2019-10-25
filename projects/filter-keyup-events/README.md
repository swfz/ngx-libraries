# FilterKeyupEvents

Angular directive that recieves an event when there is no keyup input for a certain period of time.

using ng library

## Usage

```
npm install -S @swfz/ngx-filter-keyup-events
```

And import into your NgModule


```
import {NgModule} from '@angular/core';
import {FilterKeyupEventsModule} from '@swfz/ngx-filter-keyup-events';

@NgModule({
  imports: [FilterKeyupEventsModule],
})
```

- your.component.html

```
<input
  libFilterKeyupEvents
  [intervalMs]="500"
  (filteredKeyup)="onFilteredKeyup($event)"
  type="text"
/>
```

- your.component.ts

```
  onFilteredKeyup(event: string) {
    console.log(event);
  }
```


## Reference

### inputs
- intervalMs
    - type: number
    - threshold for how many milliseconds of input are not fired


### outputs
- filteredKeyup
    - filtered input value


