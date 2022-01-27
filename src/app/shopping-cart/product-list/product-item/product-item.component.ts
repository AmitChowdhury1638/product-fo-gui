import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { FilterComponent } from '../../filter/filter.component';
import { ShoppingCartComponent } from '../../shopping-cart.component';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedService } from 'src/app/services/shared.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { RegisterService } from 'src/app/services/register/register.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { isPlatformWorkerApp } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  addedToWishlist: boolean= false
  products:Product[]=[]; 
  filter: any[]=[];
  cartItems: any = [];
  cartArray: any = [];
  value: string = "ADD TO CART";
  constructor(
    private msg: MessengerService,
    private productService: ProductService,
    private dialogService: DialogService,
    private sharedService: SharedService,
    private wishlistService: WishlistService,
    private registerService: RegisterService
    ) {
     }

    ngOnInit(): void {
   
    
}
  handleAddToCart(product: any){
    
   this.msg.sendMsg(this.productItem)
 }

  addtocart(product: any){
    console.log(product)
    this.sharedService.addtoCart(product);
  }

   handleAddToWishlist(item: any) {
     this.addedToWishlist = true;
     this.wishlistService.addtoWishlist(item);
     
}

   handleRemoveFromWishlist(item: any) {
     this.addedToWishlist = false;
     this.wishlistService.removeWishlistItem(item)
}
 }
