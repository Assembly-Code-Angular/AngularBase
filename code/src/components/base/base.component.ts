import { Component } from '@angular/core';
import { BookListComponent } from '../book_list.component.ts/book_list.component';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <p>base component</p>
    <book-list/>
  `,
  imports: [BookListComponent],
  
})
export class BaseComponent {
  title = 'homes';
}
