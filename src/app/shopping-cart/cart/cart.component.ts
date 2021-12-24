import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';

import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 cartItems: any = [];
 cartTotal = 0

 constructor(private msg: MessengerService,
             private http: HttpClient,
             private productService: ProductService,
             private sharedService: SharedService) { }
 
  ngOnInit() {
    this.sharedService.getProducts().subscribe(res=>{
      this.cartItems = res;
     this.cartTotal = 0
     this.cartItems.forEach((item: {  qty: number;price: number; }) => {
     this.cartTotal +=  (item.qty * item.price)
 })
})

 
 }

addProductToCart(product: Product){
 let productExists = false

 for (let i in this.cartItems) {
   if (this.cartItems[i].productId === product.id) {
     this.cartItems[i].qty++
     productExists = true
     break;
   }
 }

 if (!productExists) {
   this.cartItems.push(
     {
   productId: product.id,
     productName: product.name,
     qty: 1,
     price: product.price
   }
   )
 }
 

 this.cartTotal = 0
 this.cartItems.forEach((item: { qty: number; price: number; }) => {
   this.cartTotal += (item.qty * item.price)
 })
}


}






 

   


  





  
  

