import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  getValues(event: Event){
    const btnValue = event.target as HTMLInputElement
    console.log(btnValue.value);
  }
}
