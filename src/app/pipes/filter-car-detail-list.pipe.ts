import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'filterCarDetailList'
})
export class FilterCarDetailListPipe implements PipeTransform {

  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDetailDto)=>(c.carName + " " + c.brandName + " " + c.colorName + " " + c.modelYear + " ").toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
