import {environment} from "../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ApiConfiguration {

  books = `${environment.baseUrl}/books`

}
