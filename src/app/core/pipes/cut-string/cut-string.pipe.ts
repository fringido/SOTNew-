import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString',
  standalone: true
})
export class CutStringPipe implements PipeTransform {

  transform(text: string, maxLength: number): string {
    if(text.length <= maxLength + 3) {
      return text;
    }
    const formattedText = text.slice(0, maxLength);
    if(formattedText.endsWith(' ')) {
      // todo: extrañamente Luis mario hernandez garcia no borra el ultimo espacio
      const textWithoutLastSpace = 
      formattedText.slice(0, formattedText.length-1);
      return textWithoutLastSpace + '...';
    }
    return formattedText + '...'
  }

}
