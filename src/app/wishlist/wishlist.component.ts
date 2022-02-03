import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LocaleTranslationService } from '../services/localetranslation/locale-translation.service';
import { MessengerService } from '../services/messenger.service';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';
import { WishlistService } from '../services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any = [];
  clickEventSubscription: Subscription | undefined;
  public username: string = '';
  language: string = "english";
  code: string = "eng";
  map = new Map();
  key: any
  constructor(private wishlistService: WishlistService,
              private sharedService: SharedService,
              private messengerService: MessengerService,
              private localeTranslationService: LocaleTranslationService,
              private productService: ProductService) {
               
               }

  ngOnInit(): void {

    this.localeTranslationService.getLocaleTranslation().subscribe((data)=>{
      data.forEach((item: {  key: string, localeCode: string, translation: string }) => {
        this.map.set(item.key + "_" + item.localeCode, item.translation)
      })
    })

    console.log(this.map)

    this.clickEventSubscription= this.messengerService.getLanguage().subscribe((language)=>{
      console.log(language)
      this.language = language
      if(this.language == "english")
      this.code = "eng";
      else if(this.language == "hindi")
      this.code = "hin"
      else if(this.language == "marathi")
      this.code = "mar"
      else if(this.language == "bangla")
      this.code = "ben"
      this.getProducts();
    })

    this.clickEventSubscription= this.messengerService.getLogin().subscribe((language)=>{
      
      this.getProducts();
    })
  
    this.getProducts()
  }

  getProducts(){
    this.wishlistService.getProducts().subscribe(res=>{
      this.wishlistItems = res;
      console.log(this.wishlistItems)
    
      // this.wishlistItems.forEach((item: {  id: any, name: any}) => {
      //   this.productService.getById(item.id).subscribe((data)=>{
      //     console.log(data[0].name)
      //     item.name = data[0].name
      //     console.log(item.name)
      //   })

      // })
    /*this.wishlistItems.forEach((item: {  description: any}) => {
         
         //this.key = item.name + "_" + this.code;
         item.description = "diamond_rings_hin"
         console.log(this.key)
      })*/
    })
    
       }
  

  removeItem(item: any){
    this.wishlistService.removeWishlistItem(item)
  }

  addToCart(item: any){
    this.sharedService.addtoCart(item);
  }

}
