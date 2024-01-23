import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ArrayBooksService} from './service/array-books.service';
import books from './models/books.data';
import {BookModel} from "./models/book.model";

@NgModule({
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
      provide: 'bookService',
      useClass: ArrayBooksService
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
