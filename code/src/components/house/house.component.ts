import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'house-card',
  template: `
    <h1>HOUSE DO GRAU!</h1>
  `,
  styleUrls: ['./house.component.css'],
})
export class HouseCardComponent {
  title = 'homes';
}
