import {Component} from '@angular/core';
import {SecurityService} from "../../services/security.service";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

    login: string = 'training-client';
    password: string = '';
    loginError = false;

    constructor(private securityService: SecurityService) {
    }

    authenticate() {
        this.securityService.authenticate(this.login, this.password)
            .subscribe({
                error: (error) => this.loginError = true
            });
    }

}
