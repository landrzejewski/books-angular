import {Component} from '@angular/core';
import {BookModel} from './books/models/book.model';

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
      rating: 3,
      isBestseller: false
    }
  ];

}






