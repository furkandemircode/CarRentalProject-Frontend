import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44379/api/rentals"

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getCheckCarRentalByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "/checkcarrentalbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  addRental(rental: Rental): Observable<SingleResponseModel<Rental>> {
    let newPath = this.apiUrl + "/add";
    return this.httpClient.post<SingleResponseModel<Rental>>(newPath, rental);
  }

  
}
