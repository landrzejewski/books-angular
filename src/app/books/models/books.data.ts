import {BookModel} from "./book.model";

const books: BookModel[] = [
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
    rating: 4,
    isBestseller: false
  }
];

export default books;
