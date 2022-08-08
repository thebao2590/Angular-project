import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchkey:string): Product[]|any {
    if(searchkey==''){
      return value;
    }
    let list:Product[]=[];
    if(searchkey!=''){
      for(let item of value){
        if(item.productname.indexOf(searchkey.toUpperCase())!=-1){
          list.push(item);
        }
      }
      return list;
    }
  }

}
