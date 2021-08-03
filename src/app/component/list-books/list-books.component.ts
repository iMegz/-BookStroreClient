import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  books!: any;

  addBookToCart = (id: String) => {};

  constructor(private server: ServerService) {
    server.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnInit(): void {}
}
