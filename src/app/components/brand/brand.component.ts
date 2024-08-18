import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand: Brand | null;
  filterBrandText="";

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    return brand === this.currentBrand ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
  }

  getAllBrandClass() {
    return !this.currentBrand ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
  }

  setGetAllBrand() {
    this.currentBrand = null;
  }

  removeBrandQueryParam() {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    delete queryParams['brandId'];
    return queryParams;
  }
}
