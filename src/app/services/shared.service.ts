import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MessengerService } from './messenger.service';
import { ProductService } from './product.service';
import { RegisterService } from './register/register.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  res: any
  public myArray : any =[]
  clickEventSubscription: Subscription | undefined;
  username: any
  id: any

  constructor(private registerService: RegisterService,
              private productService: ProductService,
              private messengerService: MessengerService) { 
                this.clickEventSubscription= this.messengerService.getLogin().subscribe((username: any)=>{
                  this.username = username
                  
                })
  
    
  }

  getProducts(){
    console.log(this.username)
    this.registerService.getUserDetailByUsername(this.username).subscribe((data)=>{
      this.res = data
      console.log(this.res.cartIds)
      this.myArray = this.res.cartIds.split(',');
      
      for(let i =0;i<this.myArray.length;i++){
        this.productService.getById(this.myArray[i]).subscribe((data)=>{
          this.res = data;
          console.log(this.res.id.length)
          if(this.res.id == ""){
            console.log("wrong")
          
          } else{
            console.log("right")
            this.addtoCart(this.res)

          }
          console.log("sanu")
        })
      }
    
    })
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productId === product.id) {
        console.log("cart")
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
      id: product.id,
      //buttonValue: true
    });
    this.registerService.editCartId(product.id, this.username).subscribe(()=>{
      
    })
    this.productList.next(this.cartItemList);
 }
  }

  decrement(product : any){
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productId === product.id) {
        if(this.cartItemList[i].qty==1){
          this.cartItemList[i].qty=1;
         // this.cartItemList[i].discount = 56
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
    this.registerService.deleteCartIds(product.id).subscribe(()=>{
      
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
