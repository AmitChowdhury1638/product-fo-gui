import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement/advertisement.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  responsiveOptions: any;
  images = [  

  ];

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
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.advertisementService.getAdvertisement().subscribe((data)=>{
      console.log(data)
      for(let i=0;i<data.length;i++){
        if(data[i].name=="carousel1"){
          this.images=data[i].imagePath.split(",")
        }
      }
    })
  }

}
