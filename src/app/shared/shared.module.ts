import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from './components/rating/rating.component';
import {ErrorMessagesComponent} from "./components/error-messages/error-messages.component";
import {AppEmailValidator} from "./directive/validator/app-email.directive";

@NgModule({
  declarations: [
    RatingComponent,
    ErrorMessagesComponent,
    AppEmailValidator
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
    ErrorMessagesComponent,
    AppEmailValidator
  ]
})
export class SharedModule { }
