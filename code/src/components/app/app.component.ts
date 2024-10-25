import { Component } from '@angular/core';
import { HouseCardComponent } from '../house/house.component';
import { AddComponent } from '../Add/add.component';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Start of app component</h1>
      <house-card/>
      <add-root/>
    <h1>End of app component</h1>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HouseCardComponent,AddComponent],
})
export class AppComponent {
  title = 'homes';
}
