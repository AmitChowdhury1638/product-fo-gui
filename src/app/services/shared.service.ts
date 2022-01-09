import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productId === product.id) {
        console.log("cart")
      //  this.cartItemList[i].qty++
        productExists = true
        break;
      }
    }
   if(!productExists){
    this.cartItemList.push( {
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
    this.productList.next(this.cartItemList);
 }
  }

  decrement(product : any){
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productId === product.id) {
        if(this.cartItemList[i].qty==1){
          this.cartItemList[i].qty=1;
          break;
        }
        this.cartItemList[i].qty--
        
       productExists = true
        break;
      }
    }
    
  }

  increment(product : any){
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productId === product.id) {
        this.cartItemList[i].qty++
       productExists = true
        break;
      }
    }
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
