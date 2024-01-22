import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class BooksModule { }
