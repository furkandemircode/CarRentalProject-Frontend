import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailDtoListComponent } from './components/car-detail-dto-list/car-detail-dto-list.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarDetailDtoListComponent },
  { path: 'cars', component: CarDetailDtoListComponent },
  { path: 'carImages', component: CarImageComponent },
  { path: 'rentals', component: RentalComponent },
  { path: 'payment/:carId', component: PaymentComponent },
  { path: 'rentals/:carId', component: RentalComponent },
  { path: 'cars/brand/:brandId', component: CarDetailDtoListComponent },
  { path: 'cars/color/:colorId', component: CarDetailDtoListComponent },
  { path: 'cars/brand/:brandId/color/:colorId', component: CarDetailDtoListComponent },
  { path: 'car/:carId', component: CarDetailDtoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
