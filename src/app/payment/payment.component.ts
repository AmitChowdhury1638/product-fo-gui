import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private productService : ProductService,
              private http: HttpClient) { }
  orderId!: string;
  customerId!: string
  transactionAmount!: number 
  ngOnInit(): void {
  }
  
  pay(){
  
   
  }
}
  


