import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BookModel, emptyBook} from "../../models/book.model";
import {ActivatedRoute, NavigationEnd, Router, Scroll} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnDestroy {

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

  private subscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.subscription = router.events
      .subscribe({
        next: (event) => {
          if (event instanceof Scroll) { // NavigationEnd...
            const book = this.route.snapshot.data['book'];
            if (book) {
              this.book = book;
              this.isEditable = false;
            }
          }
        }
      });
  }

  ngOnInit(): void {
    this.subscription = this.route.params
      .subscribe({
        next: (params) => {
          const book = this.route.snapshot.data['book'];
          if (book) {
            this.book = book;
            this.isEditable = false;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  saveBook(bookForm: NgForm) {
    if (bookForm.valid) {
      this.save.emit(this.book);
    }
  }

}
