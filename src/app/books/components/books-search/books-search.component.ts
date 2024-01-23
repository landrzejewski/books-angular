import {Component, Inject, OnDestroy, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime, filter, map, Observable, Subject, Subscription} from "rxjs";
import {BooksService} from "../../service/books.service";
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrl: './books-search.component.css'
})
export class BooksSearchComponent implements OnDestroy {

  queryForm = new FormGroup({
    queryInput: new FormControl<string>('')
  });
  private emitter = new Subject<BookModel[]>();
  private subscription?: Subscription

  @Output()
  queryResult: Observable<BookModel[]> = this.emitter;

  constructor(@Inject('bookService') private booksService: BooksService) {
    this.subscription = this.queryForm.get('queryInput')
      ?.valueChanges
      ?.pipe(
        debounceTime(1000),
        filter(this.minLength(3)),
        map(this.toLowerCase)
      )
      ?.subscribe({
        next: (query) => this.searchBooks(query)
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  private minLength(length: number): (arg0: string | null) => boolean {
    return (text: string | null) => text != null && (text.length >= length || text.length === 0);
  }

  private toLowerCase(text: string | null): string {
    return text?.toLowerCase() ?? '';
  }

  /*private searchBooks(query: string) {
    this.booksService.filter('title', query)
      .subscribe({
        next: (books) => this.emitter.next(books)
      });
  }*/

  private searchBooks(query: string) {
    this.booksService.filter('title', query)
      .subscribe({
        next: (books) => this.emitter.next(books)
      });
  }

}
