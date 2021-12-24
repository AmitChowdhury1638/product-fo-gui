import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() 
  cartItem: any
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    
  }

}
