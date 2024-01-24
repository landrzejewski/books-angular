import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from "../environments/environment";
import {LoginFormComponent} from "./shared/components/login-form/login-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books/panel',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     //useHash: true,
     enableTracing: environment.enableTracing
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
