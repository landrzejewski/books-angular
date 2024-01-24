import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable, share} from "rxjs";
import {UserModel} from "../models/user.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ApiConfiguration} from "../../api.configuration";
import {LocalStorageUserService} from "./local-storage-user.service";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  user$: Observable<UserModel>;
  private subject$: BehaviorSubject<UserModel>;

  get lastUser(): UserModel {
    return this.subject$.value;
  }

  constructor(private httpClient: HttpClient, private api: ApiConfiguration, private userRepository: LocalStorageUserService) {
    this.subject$ = new BehaviorSubject<UserModel>(userRepository.load());
    this.user$ = this.subject$.asObservable();
  }

  authenticate(login: string, password: string): Observable<string> {
    const headers = this.createHeaders();
    const body = this.createRequestBody(login, password);
    const token$ = this.httpClient.post<any>(this.api.login, body, {headers})
      .pipe(
        map((response) => response['access_token'] as string),
        share()
      );
    token$
      .subscribe({
        next: (token) => this.onAuthenticated(login, token)
      })
    return token$;
  }

  private onAuthenticated(login: string, token: string) {
    const user = new UserModel(login, token);
    this.userRepository.save(user);
    this.subject$.next(user);
  }

  logout() {
    this.userRepository.clear();
    this.subject$.next(new UserModel());
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
  }

  private createRequestBody(login: string, password: string): HttpParams {
    return new HttpParams()
      .set('grant_type', 'password')
      .set('client_id', 'web')
      .set('username', login)
      .set('password', password);
  }

}
