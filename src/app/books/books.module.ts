import {InjectionToken, NgModule} from '@angular/core';
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
import {BooksRoutingModule} from "./books-routing.module";
import { BooksListComponent } from './components/books-list/books-list.component';
import {BooksService} from "./service/books.service";
import {TranslateModule} from "@ngx-translate/core";

export const BOOKS_SERVICE = new InjectionToken<BooksService>('bookService');

@NgModule({
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPageComponent,
    BooksSearchComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    BooksRoutingModule,
    TranslateModule
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
      provide: BOOKS_SERVICE,
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
