import { Component } from '@angular/core';
import {  BookCardComponent } from '../bookCard/book_card.component';


@Component({
  standalone: true,
  selector: 'book-list',
  template: `
  <div class="container">
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
    <book-card/>
  </div>
  `,
  imports: [BookCardComponent],
  styleUrls: ['./book_list.component.css'],
  
})
export class BookListComponent {
  title = 'homes';
}
