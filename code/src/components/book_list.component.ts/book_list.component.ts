import { Component, NgModule } from '@angular/core';
import {  BookCardComponent } from '../bookCard/book_card.component';
import { Book } from 'src/model/Book';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'book-list',
  template: `
  <div class="container">
    <p>Pintas book</p>
    <book-card *ngFor="let book of bookList;" [pDSad]="book.pDSad"/>
  </div>
  `,
  imports: [BookCardComponent,CommonModule],
  styleUrls: ['./book_list.component.css'],
  
})
export class BookListComponent {
  title = 'homes';
  bookList: Book[] = [
      {id:1,pDSad:false},
      {id:2,pDSad:true},
      {id:3,pDSad:false},
      {id:4,pDSad:false},
      {id:5,pDSad:true},
      {id:6,pDSad:true},
      {id:7,pDSad:true},
      {id:8,pDSad:true},
      {id:9,pDSad:true},
      {id:10,pDSad:false},
  ]
}


