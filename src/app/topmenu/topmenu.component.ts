import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
  totalItem : number = 0;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    
  }

}
