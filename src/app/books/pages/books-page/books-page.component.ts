import {Component, Inject, Input} from '@angular/core';
import {BookModel, emptyBook} from '../../models/book.model';
import {BooksService} from "../../service/books.service";
import {EMPTY, Observable, of} from "rxjs";
import {BOOKS_SERVICE} from "../../books.module";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {

  @Input()
  books$: Observable<BookModel[]> = EMPTY;
  editedBook?: BookModel;

  constructor(@Inject(BOOKS_SERVICE) private booksService: BooksService) {
    this.refresh();
  }

  add() {
    this.editedBook = emptyBook();
  }

  edit(book: BookModel) {
    this.editedBook = {...book};
  }

  save(book: BookModel) {
    this.booksService.save(book)
      .subscribe({
        complete: () => this.reset(),
        error: (exception) => console.log(exception)
      })
  }

  reset() {
    this.editedBook = undefined;
    this.refresh();
  }

  private refresh() {
    this.books$ = this.booksService.getAll();
  }

  onQueryResult(books: BookModel[]) {
    this.books$ = of(books);
  }

}
