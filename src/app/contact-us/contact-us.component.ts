import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ConfigurationService } from '../services/configuration/configuration.service';
import { MessengerService } from '../services/messenger.service';
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
  code: string = "eng";
  clickEventSubscription: Subscription | undefined;
  language: string = "english";
  constructor(private productService: ProductService,
               private configurationService: ConfigurationService,
               private msg: MessengerService) { }

  ngOnInit(): void {
    this.clickEventSubscription= this.msg.getLanguage().subscribe((language)=>{
      this.language = language
      if(this.language == "english")
      this.code = "eng";
      else if(this.language == "hindi")
      this.code = "hin"
      else if(this.language == "marathi")
      this.code = "mar"
      else if(this.language == "bangla")
      this.code = "ben"

      this.getMobileNumber()
      this.getAddress()
      this.getEmail()
    })
    

     this.getMobileNumber()
     this.getAddress()
     this.getEmail()

    

  
  }

  getMobileNumber(){
    this.configurationService.getConfigurationByKey("mobile number").subscribe((data)=>{
      this.mobile=data[0].value
      console.log(data)
    })

  }

  getAddress(){
    this.configurationService.getConfigurationByKey("address").subscribe((data)=>{
      this.address=data[0].value
      console.log(data)
    })

  }

  getEmail(){
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
