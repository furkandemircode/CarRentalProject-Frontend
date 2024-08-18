import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';
import { BrandService } from '../../services/brand.service';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  selectedBrandId: number | null = null;
  selectedColorId: number | null = null;

  @Output() filterChanged = new EventEmitter<{ brandId: number | null, colorId: number | null }>();
  @Output() clearFilter = new EventEmitter<void>();

  constructor(private brandService: BrandService, private colorService: ColorService) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  applyFilter() {
    this.filterChanged.emit({
      brandId: this.selectedBrandId,
      colorId: this.selectedColorId
    });
  }

  clearFilters() {
    this.selectedBrandId = null;
    this.selectedColorId = null;
    this.clearFilter.emit();
  }
}
