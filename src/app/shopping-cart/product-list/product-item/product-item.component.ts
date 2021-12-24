import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { FilterComponent } from '../../filter/filter.component';
import { ShoppingCartComponent } from '../../shopping-cart.component';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedService } from 'src/app/services/shared.service';

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
  constructor(
    private msg: MessengerService,
    private productService: ProductService,
    private dialogService: DialogService,
    private sharedService: SharedService
    ) {
     }

    ngOnInit(): void {
    
}
  handleAddToCart(){
   this.msg.sendMsg(this.productItem)
 }

  addtocart(item: any){
    this.msg.sendMsg(this.productItem)
    this.sharedService.addtoCart(item);
}

   handleAddToWishlist() {
     this.addedToWishlist = true;
}

   handleRemoveFromWishlist() {
  this.addedToWishlist = false;
}
 }
