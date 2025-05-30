import { Component, OnInit } from '@angular/core';
import { BookCardComponent } from '../bookCard/book_card.component';
import { Book } from 'src/model/Book';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'book-list',  
  template: `
    <div class="container">
      <p>Pintas book</p>
      <book-card *ngFor="let book of filteredBooks" [book]="book" />
    </div>
  `,
  imports: [BookCardComponent, CommonModule],
  styleUrls: ['./book_list.component.css'],
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [
    { id: 1, nome: "O pintas ainda nao tinha nascido" },
    { id: 2, nome: "O pintas tem depressao", imagem: "...", preco: 3.50 },
    { id: 3, nome: "O pintas tomou Ansiolítico", imagem: "...", preco: 32.50 },
    { id: 4, nome: "O pintas inalou um baseado", imagem: "...", preco: 22.50 },
    { id: 5, nome: "O pintas dormiu" },
    { id: 6, nome: "O pintas correu atrás do rabo" },
    { id: 7, nome: "O pintas virou artista" },
    { id: 8, nome: "O pintas leu Freud" },
    { id: 9, nome: "O pintas conheceu Jung" },
    { id: 10, nome: "O pintas virou terapeuta" },
  ];

  filteredBooks: Book[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const search = (params['search'] || '').toLowerCase();
      this.filteredBooks = this.bookList.filter(book =>
        book.nome?.toLowerCase().includes(search)
      );
    });
  }
}
