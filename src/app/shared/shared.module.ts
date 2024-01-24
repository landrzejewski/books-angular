import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from './components/rating/rating.component';
import {ErrorMessagesComponent} from "./components/error-messages/error-messages.component";
import {AppEmailValidator} from "./directives/validator/app-email.directive";
import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {HighlightDirective} from "./directives/highlight.directive";
import {BetterHighlightDirective} from "./directives/better-highlight.directive";
import {UnlessDirective} from "./directives/unless.directive";
import {RepeatDirective} from "./directives/repeat.directive";

@NgModule({
  declarations: [
    RatingComponent,
    ErrorMessagesComponent,
    AppEmailValidator,
    CapitalizePipe,
    HighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    RepeatDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
    ErrorMessagesComponent,
    AppEmailValidator,
    CapitalizePipe,
    HighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    RepeatDirective
  ]
})
export class SharedModule { }
