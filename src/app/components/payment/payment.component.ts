import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payFormGroup: FormGroup;
  rental: Rental;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rentalService: RentalService,
    private paymentService: PaymentService,
  ) {}

  ngOnInit(): void {
    this.createPayFormGroup();
    this.route.params.subscribe(params => {
      const carId = params['carId'];
      this.rental = {
        id: 0, 
        carId,
        customerId: 2,
        rentDate: new Date(),
        returnDate: undefined
      };
    });
  }

  createPayFormGroup() {
    this.payFormGroup = this.formBuilder.group({
      fullName: ["", Validators.required],
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  pay() {
    if (this.payFormGroup.valid) {
      const payment: Payment = {
        id: 0,
        customerId: this.rental.customerId,
        fullName: this.payFormGroup.get('fullName')!.value,
        cardNumber: this.payFormGroup.get('cardNumber')!.value,
        cvv: this.payFormGroup.get('cvv')!.value,
        expiryMonth: this.payFormGroup.get('expiryMonth')!.value,
        expiryYear: this.payFormGroup.get('expiryYear')!.value
      };
  
      this.paymentService.pay(payment).subscribe(
        (response) => {
          console.log('Payment successful:', response);
          this.rentCar();
        },
        (error) => {
          console.error('Payment error:', error);
        }
      );
    } else {
      console.error('Form is missing required fields.');
    }
  }

  rentCar() {
    this.rentalService.addRental(this.rental).subscribe(
      (response) => {
        if (response.success) {
          console.log('Rental added successfully:', response.message);
        } else {
          console.error('Failed to add rental:', response);
        }
      },
      (error) => {
        console.error('Error adding rental:', error);
      }
    );
  }
}