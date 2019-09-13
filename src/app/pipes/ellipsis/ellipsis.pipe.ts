import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  text: string = null;

  transform(text: string, until?: any): any {
    if (text && text.length > until) {
      text = text.substring(0, until);
      return this.text = text + ".";
    } else {
      return text;
    }
  }

}
