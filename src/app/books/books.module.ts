import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ArrayBooksService} from './service/array-books.service';
import books from './models/books.data';

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
    ArrayBooksService,
    {
      provide: 'booksData',
      useValue: books
    }
  ],
  exports: [
    BooksPageComponent
  ]
})
export class BooksModule { }
