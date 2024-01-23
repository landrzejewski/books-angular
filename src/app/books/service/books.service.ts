import {Observable} from "rxjs";
import {BookModel} from "../models/book.model";

export interface BooksService {

  getAll(): Observable<BookModel[]>;

  save(book: BookModel): Observable<BookModel>;

  filter(property: string, value: string): Observable<BookModel[]>;

}
