import {Component, Input} from '@angular/core';
import {BookModel} from '../../models/book.model';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {

  @Input()
  books: BookModel[] = [];
  editedBook?: BookModel = undefined;

  reset() {
    this.editedBook = undefined;
  }

  save(book: BookModel) {
    const bookIndex = this.findIndex(book.id);
    if (bookIndex != -1) {
      this.books[bookIndex] = book;
    }
    this.reset();
  }

  private findIndex(id: number): number {
    return this.books.findIndex((book) => book.id === id);
  }

  edit(book: BookModel) {
    this.editedBook = {...book};
  }

}
