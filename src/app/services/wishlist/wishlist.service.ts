import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlistItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addtoWishlist(product : any){
    let productExists = false
    for (let i in this.wishlistItemList) {
      if (this.wishlistItemList[i].productId === product.id) {
        console.log("cart")
      //  this.cartItemList[i].qty++
        productExists = true
        break;
      }
    }
   if(!productExists){
    this.wishlistItemList.push( {
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price,
      name: product.name,
      description: product.description,
      imageUrl:  product.imagePath,
      discount: product.discount,
      id: product.id
    });
    
    this.productList.next(this.wishlistItemList);
 }
  }

  removeWishlistItem(product: any){
    this.wishlistItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.wishlistItemList.splice(index,1);
      }
    })
    this.productList.next(this.wishlistItemList);
  }
}
