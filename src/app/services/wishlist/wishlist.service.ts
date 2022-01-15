import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductService } from '../product.service';
import { RegisterService } from '../register/register.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public wishlistItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  res: any
  public myArray : any =[]

  constructor(private registerService: RegisterService,
              private productService: ProductService) { }

  getProducts(){
    this.registerService.getUserDetailById(1).subscribe((data)=>{
      this.res = data
      console.log(this.res.wishlistIds)
      this.myArray = this.res.wishlistIds.split(',');
      
      for(let i =0;i<this.myArray.length;i++){
        this.productService.getById(this.myArray[i]).subscribe((data)=>{
          this.res = data;
          console.log(this.res.id.length)
          if(this.res.id == ""){
            console.log("wrong")
          
          } else{
            console.log("right")
            this.addtoWishlist(this.res)

          }
          console.log("sanu")
        })
      }
    
    })
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
    this.registerService.editWishlistId(product.id).subscribe(()=>{
      
    })
 }
  }

  removeWishlistItem(product: any){
    this.wishlistItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.wishlistItemList.splice(index,1);
      }
    })
    this.productList.next(this.wishlistItemList);
    this.registerService.deleteWishlistIds(product.id).subscribe(()=>{
      
    })
  }

  
}
