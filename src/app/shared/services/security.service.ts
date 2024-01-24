import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {ApiConfiguration} from "../../api.configuration";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private user$ = new BehaviorSubject(new UserModel());

  constructor(private httpClient: HttpClient, private api: ApiConfiguration) {
  }

}
