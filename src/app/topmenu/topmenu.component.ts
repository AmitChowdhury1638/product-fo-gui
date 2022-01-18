import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessengerService } from '../services/messenger.service';
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
  clickEventSubscription: Subscription | undefined;
  value: string = " "
  login: string = "LOGIN"

  constructor(private sharedService: SharedService,
              private wishlistService: WishlistService,
              private messengerService: MessengerService,
              private router: Router) { }

  ngOnInit(): void {
  
    this.clickEventSubscription= this.messengerService.getLogin().subscribe((username)=>{
      console.log("pp")
      this.value = username
      this.sharedService.getProducts()
    .subscribe(res=>{
      this.totalCartItem = res.length;
    })
    console.log(this.value)
    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.totalWishlistItem = res.length;
    })
    this.login = "LOGOUT"
    })
    this.sharedService.getProducts()
    .subscribe(res=>{
      this.totalCartItem = res.length;
    })
    console.log(this.value)
    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.totalWishlistItem = res.length;
    })
    
  }

  show(){
    if(this.login == "LOGIN"){
    this.router.navigateByUrl("/login")
    
    }
    else {
      this.messengerService.sendLogin("")
      this.login = "LOGIN"
      this.totalCartItem = 0
      this.totalWishlistItem = 0
    }
    
  }

  

}
