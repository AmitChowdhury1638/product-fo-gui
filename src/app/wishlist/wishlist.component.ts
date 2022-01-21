import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LocaleTranslationService } from '../services/localetranslation/locale-translation.service';
import { MessengerService } from '../services/messenger.service';
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
              private localeTranslationService: LocaleTranslationService) {
               
               }

  ngOnInit(): void {

    this.localeTranslationService.getLocaleTranslation().subscribe((data)=>{
      data.forEach((item: {  key: string, localeCode: string, translation: string }) => {
        this.map.set(item.key + "_" + item.localeCode, item.translation)
      })
    })

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
  
    this.getProducts()

       
     
    
  }

  getProducts(){
    this.wishlistService.getProducts().subscribe(res=>{
      console.log(res)
      this.wishlistItems = res;

    this.wishlistItems.forEach((item: {  description: string }) => {
         this.key = item.description + "_" + this.code
         item.description = this.map.get(this.key)
      })
    })
    
       }
  

  removeItem(item: any){
    this.wishlistService.removeWishlistItem(item)
  }

  addToCart(item: any){
    this.sharedService.addtoCart(item);
  }

}
