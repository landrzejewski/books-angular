import {Component, Input} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent {

  @Input()
  input?: NgModel

}
