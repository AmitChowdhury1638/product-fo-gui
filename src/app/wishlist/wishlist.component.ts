import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
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
  clickEventSubscription1: Subscription | undefined;
  public username: string = '';

  constructor(private wishlistService: WishlistService,
              private sharedService: SharedService,
              private messengerService: MessengerService) {
               
               }

  ngOnInit(): void {
  
    this.wishlistService.getProducts()
     .subscribe(res=>{
       this.wishlistItems = res;
       })

       
     
    
  }

  removeItem(item: any){
    this.wishlistService.removeWishlistItem(item)
  }

  addToCart(item: any){
    this.sharedService.addtoCart(item);
  }

}
