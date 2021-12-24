import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Image } from '../models/image';
import { Product } from '../models/product';
import { MessengerService } from '../services/messenger.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  sub:any;
  id:any;
 // productItem1: Product[]=[]
  products:any
  images2: any
  value: string='Add to cart'
  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  
  constructor(private _Activatedroute: ActivatedRoute,
              private _router: Router,
              private productService: ProductService,
              private msg: MessengerService,
              private sharedService: SharedService ) { }

  ngOnInit(): void {

    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
    this.id = params.get('id'); 
    this.view();
   });

    this.productService.getImages(this.id).subscribe((images1)=>{
    this.images2=images1
  })
  }
 
  view(){
    this.productService.getById(this.id).subscribe((products)=>{
      this.products=products
    })
  }

  addtocart(item: any){
  
    if (this.value=="Add to cart"){
      this.value = "Go to Cart";
   }
    else{
     this.value = "Add to cart";
     this._router.navigateByUrl("\cart")
    }

    this.msg.sendMsg(this.products)
    this.sharedService.addtoCart(item);
  }
 
  


}
