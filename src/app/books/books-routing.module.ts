import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BooksPageComponent} from "./pages/books-page/books-page.component";
import {BooksListComponent} from "./components/books-list/books-list.component";
import {BookFormComponent} from "./components/book-form/book-form.component";
import {bookResolver} from "./resolvers/book.resolver";

const routes: Routes = [
  {
    path: 'books/panel',
    component: BooksPageComponent
  },
  {
    path: 'books/list',
    component: BooksListComponent,
    children: [
      {
        path: ':id',
        component: BookFormComponent,
        resolve: { book: bookResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
