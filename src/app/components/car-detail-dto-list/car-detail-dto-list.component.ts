import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from '../../models/carDetailDto';
import { CarDetailDtoService } from '../../services/car-detail-dto.service';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from '../../services/car-image.service';
import { CarImage } from '../../models/carImage';

@Component({
  selector: 'app-car-detail-dto-list',
  templateUrl: './car-detail-dto-list.component.html',
  styleUrls: ['./car-detail-dto-list.component.css']
})
export class CarDetailDtoListComponent implements OnInit {
  carDetails: CarDetailDto[] = [];
  carImageDetails: { [key: number]: CarImage[] } = {};
  baseUrl = "https://localhost:44379/Uploads/Images/";
  filterCarText = ""

  constructor(
    private carDetailDtoService: CarDetailDtoService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['brandId'] && params['colorId']) {
        this.getAllByBrandAndColorId(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getAllByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getAllByColorId(params['colorId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carDetailDtoService.getCarDetails().subscribe(response => {
      this.carDetails = response.data;
      this.carDetails.forEach(car => {
        this.getByImageCarId(car.carId);
      });
    });
  }

  getAllByBrandId(brandId: number) {
    this.carDetailDtoService.getCarDetailsAllByBrandId(brandId).subscribe(response => {
      this.carDetails = response.data;
      this.carDetails.forEach(car => {
        this.getByImageCarId(car.carId);
      });
    });
  }

  getAllByColorId(colorId: number) {
    this.carDetailDtoService.getCarDetailsAllByColorId(colorId).subscribe(response => {
      this.carDetails = response.data;
      this.carDetails.forEach(car => {
        this.getByImageCarId(car.carId);
      });
    });
  }

  getAllByBrandAndColorId(brandId: number, colorId: number) {
    this.carDetailDtoService.getCarDetailsAllBrandAndColorId(brandId, colorId).subscribe(response => {
      this.carDetails = response.data;
      this.carDetails.forEach(car => {
        this.getByImageCarId(car.carId);
      });
    });
  }

  getByCarDetailsId(carId: number) {
    this.carDetailDtoService.getByCarDetailsId(carId).subscribe(response => {
      this.carDetails = response.data;
      this.getByImageCarId(carId);
    });
  }

  getByImageCarId(carId: number) {
    this.carImageService.getByCarImageId(carId).subscribe(response => {
      this.carImageDetails[carId] = response.data;
    });
  }

  getImagePath(carImageDetail: CarImage) {
    return this.baseUrl + carImageDetail.imagePath;
  }

  onFilterChanged(filterData: { brandId: number | null, colorId: number | null }) {
    if (filterData.brandId && filterData.colorId) {
      this.getAllByBrandAndColorId(filterData.brandId, filterData.colorId);
    } else if (filterData.brandId) {
      this.getAllByBrandId(filterData.brandId);
    } else if (filterData.colorId) {
      this.getAllByColorId(filterData.colorId);
    } else {
      this.getCarDetails();
    }
  }

  onClearFilter() {
    this.getCarDetails();
  }
}
