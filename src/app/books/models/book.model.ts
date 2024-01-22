interface BookModel {

  id: number;
  title: string;
  authors: string;
  category: string;
  genre: string;
  rating: number;
  isBestseller: boolean;

}

const emptyBookId = 0;

const emptyBook = (id= emptyBookId): BookModel => ({
  id,
  title: '',
  authors: '',
  category: '#000000',
  genre: '',
  rating: 0,
  isBestseller: false
});

export { BookModel, emptyBook, emptyBookId };
