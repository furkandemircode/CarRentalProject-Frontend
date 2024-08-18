import { Component, OnInit } from '@angular/core';
import { Rental } from '../../models/rental';
import { RentalService } from '../../services/rental.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit{

  rentals: Rental[]=[];
  newRental: Rental = {
    id: 0,
    carId: 0,
    customerId: 0,
    rentDate: new Date(),
    returnDate: undefined 
  };

  constructor(private rentalService:RentalService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCheckCarRentalByCarId(params["carId"]);
      }
      else{
        this.getRentals()

      }
    });
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data
      console.log(response.data)
    })
  }

  getCheckCarRentalByCarId(carId:number){
    this.rentalService.getCheckCarRentalByCarId(carId).subscribe(response=>{
      this.rentals = response.data
      console.log(response.message)
    })
  }

  addRental(rental:Rental) {
    this.rentalService.addRental(this.newRental).subscribe(response => {
      if (response.success) {
        console.log("Rental added successfully.");
      } else {
        console.log("Failed to add rental: " + response.message);
      }
    });
  }

}
