import {Component, Input} from '@angular/core';
import {BookModel, emptyBook} from '../../models/book.model';
import {ArrayBooksService} from '../../service/array-books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {

  @Input()
  books: BookModel[] = [];
  editedBook?: BookModel;

  constructor(private booksService: ArrayBooksService) {
    this.refresh();
  }

  add() {
    this.editedBook = emptyBook();
  }

  edit(book: BookModel) {
    this.editedBook = {...book};
  }

  save(book: BookModel) {
    this.booksService.save(book);
    this.reset();
  }

  reset() {
    this.editedBook = undefined;
    this.refresh();
  }

  private refresh() {
    this.books = this.booksService.getAll();
  }

}
