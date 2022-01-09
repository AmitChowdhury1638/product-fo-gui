import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems: any = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.wishlistItems = res;
      console.log(this.wishlistItems)
      })
  }

  removeItem(item: any){
    this.wishlistService.removeWishlistItem(item)
  }

}
