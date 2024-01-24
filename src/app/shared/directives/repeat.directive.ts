import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {DateComponent} from "../components/date/date.component";
import {BooksSearchComponent} from "../../books/components/books-search/books-search.component";

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {
  }

  @Input()
  set appRepeat(times: number) {
    for (let index = 0; index < times; index++) {
      //this.container.createEmbeddedView(this.template);

      //this.container.createComponent<DateComponent>(DateComponent);

      //this.container.createComponent(BooksSearchComponent).instance;

      //this.container.clear();
    }
  }

}
