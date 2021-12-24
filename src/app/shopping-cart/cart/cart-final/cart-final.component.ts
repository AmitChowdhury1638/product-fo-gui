import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart-final',
  templateUrl: './cart-final.component.html',
  styleUrls: ['./cart-final.component.css']
})
export class CartFinalComponent implements OnInit {

  products : any = [];
  cartItems: any = [];
  cartTotal = 0
  discountTotal=0
  grandTotal !: any;
  constructor(private msg: MessengerService,
              private sharedService: SharedService) { }

  ngOnInit(): void {
 
  this.sharedService.getProducts()
    .subscribe(res=>{
      this.cartItems = res;
      console.log(this.cartItems)
      })

    this.cartTotal = 0
    this.cartItems.forEach((item: {  qty: number;price: number; }) => {
    this.cartTotal +=  (item.qty * item.price)
   })

    this.cartItems.forEach((item: {  discount: number; }) => {
    this.discountTotal += item.discount
  })
}

  removeItem(item: any){
     this.sharedService.removeCartItem(item);
  }
  
  emptycart(){
     this.sharedService.removeAllCart();
  }

  increment(item: any){
    this.sharedService.increment(item)
    this.ngOnInit()
  }

  decrement(item: any){
    this.sharedService.decrement(item)
    this.ngOnInit()
  }

}
