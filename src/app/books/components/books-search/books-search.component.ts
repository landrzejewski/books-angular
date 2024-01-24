import {Component, Inject, OnDestroy, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime, distinct, filter, map, mergeMap, Observable, Subject, Subscription, toArray, zip} from "rxjs";
import {BooksService} from "../../service/books.service";
import {BookModel} from "../../models/book.model";
import {BOOKS_SERVICE} from "../../books.module";

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

  constructor(@Inject(BOOKS_SERVICE) private booksService: BooksService) {
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
    const byTitleQuery$ = this.booksService.filter('title', query);
    const byAuthorsQuery$ = this.booksService.filter('authors', query);
    const books$ = zip(byTitleQuery$, byAuthorsQuery$)
      .pipe(
        map(this.mergeBooks),
        mergeMap((books) => books)
      );

    const uniqueBooks$ = books$
      .pipe(
        distinct((book) => book.id),
      );

    uniqueBooks$
      .pipe(
        toArray()
      )
      .subscribe({
        next: (books) => {
          console.log('Search')
          this.emitter.next(books)
        }
      });
  }

  private mergeBooks(arrays: Array<BookModel[]>) {
    return arrays.reduce((result, data) => result.concat(data), []);
  }

}
