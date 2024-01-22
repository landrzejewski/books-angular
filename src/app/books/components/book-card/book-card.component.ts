import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookModel, emptyBook} from "../../models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input()
  book = emptyBook();
  @Input()
  isSelected = false;
  @Output()
  select = new EventEmitter<BookModel>()

  onSelect() {
    this.select.emit(this.book);
  }

}
