import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from '../../models/rentalDetailDto';
import { RentalDetailDtoService } from '../../services/rental-detail-dto.service';

@Component({
  selector: 'app-rental-detail-dto',
  templateUrl: './rental-detail-dto.component.html',
  styleUrl: './rental-detail-dto.component.css'
})
export class RentalDetailDtoComponent implements OnInit{

  rentalDetailDtos : RentalDetailDto[] = []

  constructor(private rentalDetailDtoService:RentalDetailDtoService){

  }

  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentalDetails(){
    this.rentalDetailDtoService.getRentalDetails().subscribe(response => {
      this.rentalDetailDtos = response.data
    })
  }

}
