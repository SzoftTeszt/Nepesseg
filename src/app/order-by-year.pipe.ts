import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByYear'
})
export class OrderByYearPipe implements PipeTransform {

  transform(array:any): any {

    if (array){
      array.sort(
        (a:any, b:any)=>{
            if (a['evszam']>b['evszam']) return -1;
            if (a['evszam']<b['evszam']) return 1;
            return 0;
        }
      )
    }
    return array;
  }

}
