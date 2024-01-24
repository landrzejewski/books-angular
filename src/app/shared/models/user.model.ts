export class UserModel {

  constructor(private login: string = '', private token: string = '') {
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  getLogin(): string {
    return this.login;
  }

  getToken(): string {
    return this.token;
  }

}

