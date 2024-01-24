import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookCardComponent} from './components/book-card/book-card.component';
import {BookFormComponent} from './components/book-form/book-form.component';
import {BooksPageComponent} from './pages/books-page/books-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ArrayBooksService} from './service/array-books.service';
import books from './models/books.data';
import {BookModel} from "./models/book.model";
import {HttpClientModule} from "@angular/common/http";
import {HttpBooksService} from "./service/http-books.service";
import { BooksSearchComponent } from './components/books-search/books-search.component';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPageComponent,
    BooksSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: 'booksData',
      useValue: books
    },
    /*{
      provide: 'bookService',
      useFactory: booksServiceFactory,
      deps: ['booksData']
    }*/
    {
      provide: 'booksService',
      useClass: HttpBooksService
    }
  ],
  exports: [
    BooksPageComponent
  ]
})
export class BooksModule { }

function booksServiceFactory(booksData: BookModel[]) {
  return new ArrayBooksService(booksData);
}
