import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name: string=''
  email: string=''
  message: string=''
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.productService.createEmail(this.name,this.email,this.message).subscribe((data) =>{
      console.log(data);
     });
    
  }

}
