import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookModel, emptyBook} from "../../models/book.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input()
  book = emptyBook();
  // submit name collide with default event
  @Output()
  save = new EventEmitter<BookModel>()
  @Output()
  cancel = new EventEmitter<void>();
  genres = ['Education', 'Action', 'Novel', 'Fiction', 'Romans'];
  ratings = [1, 2, 3, 4, 5];
  isEditable = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const book = this.route.snapshot.data['book'];
    if (book) {
      this.book = book;
      this.isEditable = false;
    }
  }

  saveBook(bookForm: NgForm) {
    if (bookForm.valid) {
      this.save.emit(this.book);
    }
  }

}
