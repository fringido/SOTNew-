import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString',
  standalone: true
})
export class CutStringPipe implements PipeTransform {

  transform(text: string, maxLength: number): string {
    if(text.length <= maxLength) {
      return text;
    }
    const formattedText = text.slice(0, maxLength);
    if(formattedText.endsWith(' ')) {
      return formattedText.slice(0, formattedText.length -1)
    }
    return formattedText + '...';
  }

}
