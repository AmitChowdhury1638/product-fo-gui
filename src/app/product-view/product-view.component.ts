import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductService } from 'src/app/services/product.service';
import { Image } from '../models/image';
import { Product } from '../models/product';
import { LocaleTranslationService } from '../services/localetranslation/locale-translation.service';
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
  code: string = "eng";
  clickEventSubscription: Subscription | undefined;
  language: string = "english";
  map = new Map();
  key1: any
  key2: any

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
              private sharedService: SharedService,
              private localeTranslationService: LocaleTranslationService ) { 
                
              }


 

  ngOnInit(): void {

    this.localeTranslationService.getLocaleTranslation().subscribe((data)=>{
      data.forEach((item: {  key: string, localeCode: string, translation: string }) => {
        this.map.set(item.key + "_" + item.localeCode, item.translation)
      })
    })
    
    this.clickEventSubscription= this.msg.getLanguage().subscribe((language)=>{
      this.language = language
      if(this.language == "english")
      this.code = "eng";
      else if(this.language == "hindi")
      this.code = "hin"
      else if(this.language == "marathi")
      this.code = "mar"
      else if(this.language == "bangla")
      this.code = "ben"
      this.view()
    })

    

    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
    this.id = params.get('id'); 
    this.view();
   });
   this.getImages()
    
  }
  getImages(){
    this.productService.getImages(this.id).subscribe((images1)=>{
      this.images2=images1
    })
  }

  view(){
    this.productService.getById(this.id).subscribe((products)=>{
      this.products=products 
      /*this.localeTranslationService.getLocaleTranslationByKey(this.products.description, this.code).subscribe((data)=>{
        
        this.products.description = data.translation
      })
      this.localeTranslationService.getLocaleTranslationByKey(this.products.name, this.code).subscribe((data)=>{
        this.products.name = data.translation
      })*/
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

    //this.msg.sendMsg(this.products)
    this.sharedService.addtoCart(item);
  }
 
  


}
