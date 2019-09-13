import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notFoundImage'
})
export class NotFoundImagePipe implements PipeTransform {

  transform(url: any): any {
    if (url == null) {
      return '../../../assets/images/Logo Hunter (rosa).jpg';
    } else {
      return url;
    }
  }

}
