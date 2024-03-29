import {Inject, Injectable, Optional} from '@angular/core';
import {BookModel, emptyBookId} from '../models/book.model';
import {BooksService} from "./books.service";
import {EMPTY, findIndex, Observable, of, throwError} from "rxjs";
import books from "../models/books.data";

@Injectable()
export class ArrayBooksService implements BooksService {

  constructor(@Inject("booksData") @Optional() private books: BookModel[]) {
    if (!books) {
      this.books = [];
    }
  }

  getById(id: number): Observable<BookModel> {
    const index = this.findIndex(id);
    if (index === -1) {
      return EMPTY;
    } else {
      return of({...this.books[index]});
    }
  }

  getAll(): Observable<BookModel[]> {
    return of(this.cloneBooks());
  }

  save(book: BookModel): Observable<BookModel> {
    return emptyBookId === book.id ? this.add(book) : this.update(book);
  }

  filter(property: string, value: string): Observable<BookModel[]> {
    return throwError(() => 'Method not implemented.');
  }

  private add(book: BookModel): Observable<BookModel> {
    const newBook = {...book, id: Date.now()};
    this.books = [...this.cloneBooks(), newBook];
    return of(newBook);
  }

  private update(book: BookModel): Observable<BookModel> {
    const bookIndex = this.findIndex(book.id);
    if (bookIndex !== -1) {
      const editedBook = {...book};
      const booksClone = this.cloneBooks();
      booksClone[bookIndex] = editedBook;
      this.books = booksClone;
      return of(editedBook);
    } else {
      return throwError(() => 'Book not found');
    }
  }

  private cloneBooks(): BookModel[] {
    return this.books.map((book) => ({...book}));
  }

  private findIndex(id: number): number {
    return this.books.findIndex((book) => id === book.id);
  }

}
