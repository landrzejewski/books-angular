import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {BookModel} from "../../models/book.model";
import {BooksService} from "../../service/books.service";
import {BOOKS_SERVICE} from "../../books.module";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {

  books$: Observable<BookModel[]>;

  constructor(@Inject(BOOKS_SERVICE) booksService: BooksService) {
    this.books$ = booksService.getAll();
  }

}
