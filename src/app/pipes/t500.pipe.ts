import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 't500' })
export class T500Pipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if(!value){
            return 'https://s25.postimg.org/z87ovo367/imusic.jpg';
        }
        let newValue = value.replace('large', 't500x500');
        return `${newValue}`;
    }
}