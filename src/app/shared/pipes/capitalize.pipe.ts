import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'appCapitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, letters: number): string {
    return value.substring(0, letters).toUpperCase() + value.substring(letters);
  }

}
