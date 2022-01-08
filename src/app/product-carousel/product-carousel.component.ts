import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/product.json';
import { I } from '../models/i';
import { AdvertisementService } from '../services/advertisement/advertisement.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

	responsiveOptions: any;
  products: any = (data as any).default;
  p: any;

  constructor(private advertisementService: AdvertisementService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '680px',
          numVisible: 2,
          numScroll: 2
      }
    ];
   }

  ngOnInit(): void {
    // this.advertisementService.getAdvertisementByName("carousel2").subscribe((data)=>{
    //   console.log(data)
    //  this.p=data.imagePath.split(",")
    // })

    this.advertisementService.getAdvertisement().subscribe((data)=>{
      console.log(data)
      for(let i=0;i<data.length;i++){
        if(data[i].name=="carousel2"){
          this.p=data[i].imagePath.split(",")
          console.log(this.p)
        }
      }
    
    })
  }

}
