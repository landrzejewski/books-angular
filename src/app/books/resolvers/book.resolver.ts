import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {BookModel} from "../models/book.model";
import {inject} from "@angular/core";
import {BOOKS_SERVICE} from "../books.module";
import {EMPTY} from "rxjs";

export const bookResolver: ResolveFn<BookModel> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.paramMap.get('id');
  return id ? inject(BOOKS_SERVICE).getById(+id) : EMPTY;
}
