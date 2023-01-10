import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-nglib-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() name: string = '';
  @Input() link: string = '';
  @Input() active: boolean = false;
  @Input() opacity: number = 1;
  @Input() paddingX: number = 20; //px
  @Input() paddingY: number = 8; //px
  @Input() labelColor: string = '#49515d';
  @Input() labelFontSize: number = 15; //px
  @Input() labelHoverUnderlineColor: string = '#2eca7f';

  constructor() {}
}
