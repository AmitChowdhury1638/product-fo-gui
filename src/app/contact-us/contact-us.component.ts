import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../services/configuration/configuration.service';
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
  mobile: any
  address: any
  contactUsEmail: any
  constructor(private productService: ProductService,
               private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.configurationService.getConfigurationByKey("mobile number").subscribe((data)=>{
      this.mobile=data[0].value
      console.log(data)
    })

    this.configurationService.getConfigurationByKey("address").subscribe((data)=>{
      this.address=data[0].value
      console.log(data)
    })

    this.configurationService.getConfigurationByKey("email").subscribe((data)=>{
      this.contactUsEmail=data[0].value
      console.log(data)
    })

  
  }

  onClick(){
    this.productService.createEmail(this.name,this.email,this.message,this.contactUsEmail,this.contactUsEmail).subscribe((data) =>{
      console.log(data);
     });
    
  }

}
