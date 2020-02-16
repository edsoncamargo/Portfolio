import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasImage'
})
export class HasImagePipe implements PipeTransform {

  transform(url: string, language?: any): any {
    if (url === null || url === undefined || url === '') {
      if (language === 'pt_BR') {
        return '../../assets/images/image-not-found-br.jpg';
      } else {
        return '../../assets/images/image-not-found-en.jpg';
      }
    }

    return url;
  }

}
