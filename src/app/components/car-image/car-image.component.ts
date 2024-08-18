import { Component, OnInit } from '@angular/core';
import { CarImageService } from '../../services/car-image.service';
import { CarImage } from '../../models/carImage';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit{

  carImages: CarImage[] = [];

  baseUrl = "https://localhost:44379/Uploads/Images/";

  constructor(private carImageService:CarImageService) {}

  ngOnInit(): void {
    this.getCarImages();
  }

  getCarImages() {
    this.carImageService.getCarImages().subscribe(response => {
      this.carImages = response.data;
      console.log(this.carImages); 
    });
  }
}
