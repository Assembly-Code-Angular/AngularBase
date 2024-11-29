import { Component } from '@angular/core';
import {  BookCardComponent } from '../bookCard/book_card.component';


@Component({
  standalone: true,
  selector: 'book-list',
  template: `
  <div class="container">
    <p>Pintas book</p>
    <book-card [pDSad]=false/>
    <book-card [pDSad]=true/>
    <book-card [pDSad]=false/>
    <book-card [pDSad]=false/>
    <book-card [pDSad]=true/>
    <book-card [pDSad]=true/>
    <book-card [pDSad]=true/>
    <book-card [pDSad]=true/>
    <book-card [pDSad]=true/>
    <book-card [pDSad]=true/>
    <book-card [pDSad]=true/>
  </div>
  `,
  imports: [BookCardComponent],
  styleUrls: ['./book_list.component.css'],
  
})
export class BookListComponent {
  title = 'homes';
}
