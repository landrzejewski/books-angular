import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookModel, emptyBook} from "../../models/book.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  book = emptyBook();
  // submit name collide with default event
  @Output()
  save = new EventEmitter<BookModel>()
  @Output()
  cancel = new EventEmitter<void>();
  genres = ['Education', 'Action', 'Novel', 'Fiction', 'Romans'];
  ratings = [1, 2, 3, 4, 5];

  saveBook(bookForm: NgForm) {
    if (bookForm.valid) {
      this.save.emit(this.book);
    }
  }

}
