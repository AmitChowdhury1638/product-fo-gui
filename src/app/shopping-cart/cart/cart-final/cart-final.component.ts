import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { RegisterService } from 'src/app/services/register/register.service';
import { SharedService } from 'src/app/services/shared.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-cart-final',
  templateUrl: './cart-final.component.html',
  styleUrls: ['./cart-final.component.css']
})
export class CartFinalComponent implements OnInit {

  products : any = [];
  cartItems: any = [];
  cartTotal = 0
  quantity = 130
  discountTotal=0
  grandTotal !: any;
  res: any
  value: string='Move to Wishlist'
  constructor(private msg: MessengerService,
              private sharedService: SharedService,
              private wishlistService: WishlistService,
              private router: Router,
              private registerService: RegisterService) { }

  ngOnInit(): void {
    this.getProducts()
    
}

 getProducts(){
  this.sharedService.getProducts()
  .subscribe(res=>{
    this.cartItems = res;
    console.log(this.cartItems)

    this.cartTotal = 0
  this.cartItems.forEach((item: {  qty: number; price: number; discount: number }) => {
  this.cartTotal +=  (item.qty * item.price)
  this.discountTotal = item.discount * item.qty
 })
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

  addToWishlist(item: any){
    if (this.value=="Move to Wishlist"){
      this.value = "Go to Wishlist";
   }
    else{
     this.value = "Move to Wishlist";
     this.router.navigateByUrl("\wishlist")
    }
    this.wishlistService.addtoWishlist(item)
  }

}
