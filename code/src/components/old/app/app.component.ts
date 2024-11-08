import { Component } from '@angular/core';
import { AddComponent } from '../Add/add.component';
@Component({
  standalone: true,
  selector: 'app',
  template: `
    <h1>Start of app component</h1>
     
      <add-root/>
    <h1>End of app component</h1>
    <p>feito pelo Rafa</p>
  `,
  styleUrls: ['./app.component.css'],
  imports: [AddComponent],
})
export class AppComponent {
  title = 'homes';
}
