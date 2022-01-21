import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { MessengerService } from 'src/app/services/messenger.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LocaleTranslationService } from 'src/app/services/localetranslation/locale-translation.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

  

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  clickEventSubscription: Subscription | undefined;
  sortedValues: string = '';
  productList: Product[] = [];
  sort: string='';
  images: any[]=[]
  f1: any;
  f2: any;
  f3: any;
  code: string = "eng";
  language: string = "english";
  price: any[] = [];
  constructor(private productService: ProductService,
              private msg: MessengerService,
              private localeTranslationService: LocaleTranslationService) {
                this.price = [
                  {name: 'Price: Low-High'},
                  {name: 'Price: High-Low'},
                 
              ];
              console.log(this.sortedValues)

                
               }
 
  ngOnInit(): void {

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
      this.getProducts('', '', '', '', this.language);
      
    })
    
    this.clickEventSubscription= this.msg.getMsgEvent().subscribe(({filter1,filter2,price})=>{
      this.f1 = filter1
      this.f2 = filter2
      this.f3 = price
      console.log(this.sort)
      this.getProducts(filter1,filter2,price,this.sort,this.language);
     })

    this.clickEventSubscription= this.msg.getMsgSort().subscribe((s: any)=>{
      this.sort = s
      console.log(this.f1)
      this.getProducts(this.f1, this.f2, this.f3, this.sort, this.language);                 
    })

    
    
    
  
    this.getProducts('', '', '', '', this.language);
    

  }

  getProducts(filter1: string, filter2: string, price: string, sort: string, language: string){
    this.productService.getProducts(filter1, filter2, price, sort, language).subscribe((products)=>{
      this.productList = products;
      this.productList.forEach((item: {  name: string }) => {
        this.localeTranslationService.getLocaleTranslationByKey(item.name, this.code).subscribe((data)=>{
          item.name = data.translation
        })
    }
    )
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
    this.msg.sendMsgSort("low")
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
  this.msg.sendMsgSort("high")
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
