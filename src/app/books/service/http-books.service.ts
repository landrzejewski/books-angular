import {mergeMap, Observable, of} from "rxjs";
import {BookModel} from "../models/book.model";
import {BooksService} from "./books.service";
import {ApiConfiguration} from "../../api.configuration";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpBooksService implements BooksService {

    constructor(private api: ApiConfiguration, private httpClient: HttpClient) {
        /*const steram$ = of('http://localhost:3000/ids')
            .pipe(
                mergeMap((url) => httpClient.get<number[]>(url)),
                mergeMap((ids) => ids),
                mergeMap((id) => httpClient.get<BookModel>(`${this.api.books}/${id}`))
            );

        steram$
            .subscribe({
                next: (value) => console.log(value)
            });*/
    }

    getAll(): Observable<BookModel[]> {
        return this.httpClient.get<BookModel[]>(this.api.books);
    }

    save(book: BookModel): Observable<BookModel> {
        if (book.id) {
            return this.httpClient.put<BookModel>(`${this.api.books}/${book.id}`, book);
        } else {
            return this.httpClient.post<BookModel>(`${this.api.books}`, book);
        }
    }

    filter(property: string, value: string): Observable<BookModel[]> {
        return this.httpClient.get<BookModel[]>(`${this.api.books}?${property}_like=${value}`);
    }

}
