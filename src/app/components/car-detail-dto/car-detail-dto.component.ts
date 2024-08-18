import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from '../../models/carDetailDto';
import { CarDetailDtoService } from '../../services/car-detail-dto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarImageService } from '../../services/car-image.service';
import { CarImage } from '../../models/carImage';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetails: CarDetailDto[] = [];
  carImageDetails: CarImage[] = [];
  addRental:Rental = {
    id:0,
    carId: 0,
    customerId: 2,
    rentDate: new Date(),
    returnDate: undefined

  }
  baseUrl = "https://localhost:44379/Uploads/Images/";
  

  constructor(
    private carDetailDtoService: CarDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.addRental.carId = +params['carId']
        this.getByCarDetailsId(params["carId"]);
        this.getByImageCarId(params["carId"]);
      }
    });
  }

  getByCarDetailsId(carId: number) {
    this.carDetailDtoService.getByCarDetailsId(carId).subscribe(response => {
      this.carDetails = response.data;
    });
  }

  getByImageCarId(carId: number){
    this.carImageService.getByCarImageId(carId).subscribe(response=>{
      this.carImageDetails = response.data;
    });
  }

  getImagePath(carImageDetail: CarImage) {
    return this.baseUrl + carImageDetail.imagePath;
  }

  navigateToPayment(carId: number) {
    if (this.addRental.returnDate) {
      this.router.navigate(['payment', carId]);
    } else {
      console.error('Return date is required before proceeding to payment.');
    }
  }
  

  rentalAdd(rental: Rental) {
    console.log("Form submitted:", rental); 
    this.rentalService.addRental(rental).subscribe(
      response => {
        console.log("Rental added:", response.message); 
        alert('Rental added successfully!');
      },
      error => {
        console.error("Error adding rental:", error); 
      }
    );
  }
  

  
}

