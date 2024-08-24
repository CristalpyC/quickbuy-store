import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  lgImage = input.required<string>();
  mdImage = input.required<string>();
  smImage = input.required<string>();
}
