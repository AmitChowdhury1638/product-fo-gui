import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { MessengerService } from 'src/app/services/messenger.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LocaleTranslationService } from 'src/app/services/localetranslation/locale-translation.service';


  

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  clickEventSubscription: Subscription | undefined;
  clickEventSubscription1: Subscription | undefined;
  subscription!: Subscription;
  sortedValues: string = '';
  productList: Product[] = [];
  sort: string='';
  images: any[]=[]
  f1: any;
  f2: any;
  f3: any;
  code: string = "hin";
  language: string = "english";
  price: any[] = [];
  map = new Map();
  key: any

  constructor(private productService: ProductService,
              private messengerService: MessengerService,
              private localeTranslationService: LocaleTranslationService) {
                this.price = [
                  {name: 'Price: Low-High'},
                  {name: 'Price: High-Low'},
                ];
                
              
                
               }
 
  ngOnInit(): void {
    

    this.localeTranslationService.getLocaleTranslation().subscribe((data)=>{
      data.forEach((item: {  key: string, localeCode: string, translation: string }) => {
        this.map.set(item.key + "_" + item.localeCode, item.translation)
      })
    })

    this.subscription = this.messengerService.getLanguage().subscribe(({language})=>{
      this.language = language
      if(this.language == "english")
      this.code = "eng";
      else if(this.language == "hindi")
      this.code = "hin"
      else if(this.language == "marathi")
      this.code = "mar"
      else if(this.language == "bangla")
      this.code = "ben"
      console.log(this.language)
      this.getProducts('', '', '', '');
      
    });

    
    
    this.clickEventSubscription = this.messengerService.getMsgEvent().subscribe(({filter1,filter2,price})=>{
      this.f1 = filter1
      this.f2 = filter2
      this.f3 = price
      console.log(this.sort)
      this.getProducts(filter1,filter2,price,this.sort);
     })

    this.clickEventSubscription= this.messengerService.getMsgSort().subscribe((s: any)=>{
      this.sort = s
      console.log(this.f1)
      //this.code = "eng" 
      this.getProducts(this.f1, this.f2, this.f3, this.sort);
                      
    })

    
    
    
  
    this.getProducts('', '', '', '');
    

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

  getProducts(filter1: string, filter2: string, price: string, sort: string){
    this.productService.getProducts(filter1, filter2, price, sort).subscribe((products)=>{
      this.productList = products;

      this.productList.forEach((item: {  name: string }) => {
         this.key = item.name + "_" + this.code
         console.log(this.key)
         item.name = this.map.get(this.key)
      })

      /*this.productList.forEach((item: {  name: string }) => {
        this.localeTranslationService.getLocaleTranslationByKey(item.name, this.code).subscribe((data)=>{
          item.name = data.translation
        })
    }
    )*/
  })
}

  

  getSortedProductsAsc(){
    if(this.f1 == undefined){
      console.log(this.sortedValues)
      //if(this.sortedValues.length>0){
        this.productService.getSortedProducts().subscribe((products)=>{
        this.productList=products
        console.log(products)
         })
     //}

    } else{
    console.log(this.f1)
    this.messengerService.sendMsgSort("low")
    }
}

getSortedProductsDesc(){
  //this.getProducts('','','',"high")
  if(this.f1 == undefined && this.f2 == undefined && this.f3 == undefined){
    console.log(this.sortedValues)
   // if(this.sortedValues.length>0){
      this.productService.getSortedProductsByDesc().subscribe((products)=>{
      this.productList=products
      console.log(products)
       })
  // }

  } else{
  this.messengerService.sendMsgSort("high")
  }
   /* if(this.sortedValues.length>0){
    this.productService.getSortedProductsByDesc().subscribe((products)=>{
      this.productList=products
    })
  }else{
    this.getProducts('','','','')
  } */
}

demo(a: any){
  console.log(this.f1)
  
  if(a.name == "Price: Low-High"){
    this.getSortedProductsAsc()
  } else{
    this.getSortedProductsDesc()
  }

    
}

} 
