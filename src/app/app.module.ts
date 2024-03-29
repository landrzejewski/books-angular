import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BooksModule} from './books/books.module';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClient, provideHttpClient, withInterceptors} from "@angular/common/http";
import {tokenInjectorInterceptor} from "./shared/interceptors/token-injector.interceptor";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BooksModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideHttpClient(withInterceptors([tokenInjectorInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
