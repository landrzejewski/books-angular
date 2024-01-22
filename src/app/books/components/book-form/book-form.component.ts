import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookModel, emptyBook} from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  @Input()
  book = emptyBook();
  @Output()
  submit = new EventEmitter<BookModel>();
  @Output()
  cancel = new EventEmitter<void>();

}
