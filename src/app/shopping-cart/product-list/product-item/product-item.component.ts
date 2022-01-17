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
  value: string = "";
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
      console.log(this.productItem)
      this.registerService.getUserDetailById(1).subscribe((data)=>{
        this.cartItems = data
        this.cartArray = this.cartItems.cartIds.split(',');
        console.log(this.cartArray)
        this.cartArray.forEach((item: any) => {
          
          for(let i in this.productItem){
           
            if(item.id == this.productItem.id ){
              this.value = "GO TO CART"
            }
          }
    
         })
      })
    
    
}
  handleAddToCart(product: any){
    
   this.msg.sendMsg(this.productItem)
 }

  addtocart(product: any){
    //this.msg.sendMsg(this.productItem)
    
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
