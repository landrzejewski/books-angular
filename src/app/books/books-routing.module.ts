import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BooksPageComponent} from "./pages/books-page/books-page.component";

const routes: Routes = [
  {
    path: 'books',
    component: BooksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
