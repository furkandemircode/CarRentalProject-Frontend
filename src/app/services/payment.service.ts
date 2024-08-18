import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = "https://localhost:44379/api/payments";

  constructor(private httpClient: HttpClient) {}

  pay(payment: Payment): Observable<ResponseModel> {
    let newPath = this.apiUrl + '/pay';
    return this.httpClient.post<ResponseModel>(newPath, payment);
  }

  // Diğer metodlar buraya eklenebilir
}
