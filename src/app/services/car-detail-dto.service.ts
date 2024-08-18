import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl = "https://localhost:44379/api/";

  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsAllByBrandId(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getallbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

  getCarDetailsAllByColorId(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getallbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

  getCarDetailsAllBrandAndColorId(brandId: number, colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + `cars/getallbybrandandcolorid?brandId=${brandId}&colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getByCarDetailsId(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getbycardetailsid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

}

