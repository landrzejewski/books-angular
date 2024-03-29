import {Injectable} from "@angular/core";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageUserService {

  private userKey = 'user';

  save(user: UserModel) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  load(): UserModel {
    const userData = localStorage.getItem(this.userKey);
    return userData ? Object.assign(new UserModel(), JSON.parse(userData)) : new UserModel();
  }

  clear() {
    localStorage.removeItem(this.userKey);
  }

}
