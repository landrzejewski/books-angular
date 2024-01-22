import {Inject, Injectable, Optional} from '@angular/core';
import {BookModel, emptyBookId} from '../models/book.model';

@Injectable()
export class ArrayBooksService {

  constructor(@Inject("booksData") @Optional() private books: BookModel[]) {
    if (!books) {
      this.books = [];
    }
  }

  getAll(): BookModel[] {
    return this.cloneBooks();
  }

  save(book: BookModel): BookModel {
    return emptyBookId === book.id ? this.add(book) : this.update(book);
  }

  private add(book: BookModel): BookModel {
    const newBook = {...book, id: Date.now()};
    this.books = [...this.cloneBooks(), newBook];
    return newBook;
  }

  private update(book: BookModel): BookModel {
    const bookIndex = this.getBookIndex(book.id);
    if (bookIndex !== -1) {
      const editedBook = {...book};
      const booksClone = this.cloneBooks();
      booksClone[bookIndex] = editedBook;
      this.books = booksClone;
      return editedBook;
    } else {
      throw new Error('Book not found');
    }
  }

  private cloneBooks(): BookModel[] {
    return this.books.map((book) => ({...book}));
  }

  private getBookIndex(id: number): number {
    return this.books.findIndex((book) => id === book.id);
  }

}
