import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { WishlistService } from '../services/wishlist/wishlist.service';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
  totalCartItem : number = 0;
  totalWishlistItem: number = 0;

  constructor(private sharedService: SharedService,
              private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.sharedService.getProducts()
    .subscribe(res=>{
      this.totalCartItem = res.length;
    })

    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.totalWishlistItem = res.length;
    })
    
  }

  

}
