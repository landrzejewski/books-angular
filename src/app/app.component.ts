import {Component} from '@angular/core';
import {BookModel} from "./book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: BookModel[]= [
    {
      id: 1,
      title: 'Angular in action',
      authors: 'Jan Kowalski',
      category: '#ffbe3c',
      genre: 'Education',
      rating: 5,
      isBestseller: true
    },
    {
      id: 2,
      title: 'React in action',
      authors: 'Marek Nowak',
      category: '#4ba5ff',
      genre: 'Education',
      rating: 5,
      isBestseller: false
    }
  ];

  editedBook?: BookModel = undefined;

  reset() {
    this.editedBook = undefined;
  }

  save() {
    if (this.editedBook) {
      const bookIndex = this.findIndex(this.editedBook.id);
      if (bookIndex != -1) {
        this.books[bookIndex] = this.editedBook;
      }
    }
    this.reset();
  }

  private findIndex(id: number): number {
    return this.books.findIndex((book) => book.id === id);
  }

  edit(book: BookModel) {
    this.editedBook = {...book};
  }

  getValue($event: Event): string {
    const input = $event.target as HTMLInputElement;
    return input.value;
  }

  get authorsStyle() {
    return {
      color: 'gray',
      letterSpacing: '2px'
    };
  }

}






