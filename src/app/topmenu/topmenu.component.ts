import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MessengerService } from '../services/messenger.service';
import { RegisterService } from '../services/register/register.service';
import { SharedService } from '../services/shared.service';
import { WishlistService } from '../services/wishlist/wishlist.service';
//import  top from '../../assets/i18n/en.json';
//import {top as a} from '../../assets/i18n/en.json';



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
  login1: boolean= true
  supportLanguages = ['english', 'bangla', 'marathi', 'hindi'];
  language: any = "english"
  

  constructor(private sharedService: SharedService,
              private wishlistService: WishlistService,
              private messengerService: MessengerService,
              private router: Router,
              private translateService: TranslateService,
              private registerService: RegisterService) {
                this.clickEventSubscription= this.messengerService.getLogin().subscribe((username)=>{
                  this.value = username
                  this.sharedService.getProducts().subscribe(res=>{
                    this.totalCartItem = res.length;
                  })
                  this.wishlistService.getProducts().subscribe(res=>{
                    this.totalWishlistItem = res.length;
                  })
                  this.login1 = false
                  this.registerService.getUserDetailByUsername(this.value).subscribe((data)=>{
                    this.language = data.language
                    this.translateService.setDefaultLang(this.language);
                  })

                })
                //this.language = "marathi"
                //this.translateService.addLangs(this.supportLanguages);
                this.translateService.setDefaultLang(this.language);
                //const browserlang = this.translateService.getBrowserLang();
                //this.translateService.use(browserlang);
              }

  ngOnInit(): void {
    
    this.clickEventSubscription= this.messengerService.getLanguage().subscribe((language)=>{
      console.log(language)
      this.login1 = false
       
    })

    this.clickEventSubscription= this.messengerService.getLoginValue().subscribe((value)=>{
      this.login1 = value
       
    })

    // this.clickEventSubscription= this.messengerService.getLogin().subscribe((username)=>{
    //   console.log("pp")
      
    // })
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
    this.router.navigateByUrl("/login")
    //this.messengerService.sendLogin("")
  }

  selectLang(lang: string){
    console.log(lang)
    this.translateService.use(lang)
    this.messengerService.sendLanguage(lang)
  }
}
