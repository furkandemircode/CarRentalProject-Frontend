import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailDtoListComponent } from './components/car-detail-dto-list/car-detail-dto-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalDetailDtoComponent } from './components/rental-detail-dto/rental-detail-dto.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterCarDetailListPipe } from './pipes/filter-car-detail-list.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CarComponent,
    CarDetailDtoListComponent,
    CustomerComponent,
    RentalDetailDtoComponent,
    CarImageComponent,
    CarDetailDtoComponent,
    FilterBrandPipe,
    FilterColorPipe,
    FilterCarDetailListPipe,
    CarFilterComponent,
    RentalComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
