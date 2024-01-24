import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from "../environments/environment";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books/panel',
    pathMatch: 'full'
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
