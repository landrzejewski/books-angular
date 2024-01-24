import {Component} from '@angular/core';
import {SecurityService} from "./shared/services/security.service";
import {UserModel} from "./shared/models/user.model";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  language = 'pl';

  constructor(private router: Router, private securityService: SecurityService, private translateService: TranslateService) {
    translateService.setDefaultLang(this.language);
    securityService.user$
      .subscribe({
        next: (user) => this.onUserChanged(user)
      })
  }

  setLanguage() {
    this.translateService.use(this.language);
  }

  private onUserChanged(user: UserModel) {
    const url = user.isAuthenticated() ? '' : 'login';
    this.username = user.getLogin();
    this.router.navigateByUrl(url);
  }

  logout() {
    this.securityService.logout();
  }

}






