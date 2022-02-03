import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import {AccordionModule} from 'primeng/accordion';
import { FilterService } from 'src/app/services/filter.service';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { Subscription } from 'rxjs';
import { MessengerService } from 'src/app/services/messenger.service';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  rangeValues: number[] = [0,100000];
  selectedValues: string[]=[];
  selectedPurities: string[]=[];
  filter1: string=''
  filter2: string='' 
  price: string=''
  f1: any[]=[]
  f2: any[]=[]
  f3: any[]=[]
  slider1: any[]=[]
  minValue!: any
  maxValue!: any
  filter_1: any
  filter_2: any
  filter_3: any
  filter_4: any
  code: string = "eng";
  clickEventSubscription: Subscription | undefined;
  //language: string = "english";

  constructor(private filterService: FilterService,
              private route: ActivatedRoute,
              private msg: MessengerService,
              private configurationService: ConfigurationService) { 
                /*this.clickEventSubscription= this.msg.getLanguage().subscribe((language)=>{
                  console.log("chv")
                  this.language = language
                  if(this.language == "english")
                  this.code = "eng";
                  else if(this.language == "hindi")
                  this.code = "hin"
                  else if(this.language == "marathi")
                  this.code = "mar"
                  else if(this.language == "bangla")
                  this.code = "ben"
                 console.log(this.code)
                this.getFilter1()
                this.getFilter2()
                this.getFilter3()
                })*/
              }

  ngOnInit(): void {

    this.clickEventSubscription= this.msg.getProducts().subscribe(()=>{
      console.log("pp")
      this.getFilter1();
      this.getFilter2();
      this.getFilter3();
      this.getFilter1Heading();
    this.getFilter2Heading();
    this.getFilter3Heading();
    })

    this.getFilter1();
    this.getFilter2();
    this.getFilter3();
    this.getSlider1();     
    this.getFilter1Heading();
    this.getFilter2Heading();
    this.getFilter3Heading();
  }

  getFilter1() {
    this.filterService.getFilter1().subscribe((filter)=>{
      this.f1=filter;
    })
  }

  getFilter2() {
    this.filterService.getFilter2().subscribe((filter)=>{
      this.f2=filter;
    })
  }

  getFilter3() {
    this.filterService.getFilter3().subscribe((filter)=>{
      this.f3=filter;
    })
  }

  getSlider1(){
    this.filterService.getSlider1().subscribe((filter)=>{
      this.slider1=filter
       this.rangeValues[0]=this.slider1[0].minValue
       this.rangeValues[1]=this.slider1[0].maxValue
      // this.maxValue = this.rangeValues[1]
      //this.rangeValues[0]=0;
      //this.rangeValues[1]=100000;
    })

  }

  getFilter1Heading(){
    this.configurationService.getConfigurationByKey("filter1").subscribe((data)=>{
      this.filter_1=data[0].value
      console.log(data)
    })
  }

  getFilter2Heading(){
    this.configurationService.getConfigurationByKey("filter2").subscribe((data)=>{
      this.filter_2=data[0].value
      console.log(data)
    })
  }

  getFilter3Heading(){
    this.configurationService.getConfigurationByKey("filter3").subscribe((data)=>{
      this.filter_3=data[0].value
      console.log(data)
    })

  }

  onCheckboxChange(e: any){
    
    if(this.selectedValues||this.selectedPurities||this.rangeValues){
    
    for(let i=0;i<this.selectedValues.length;i++){
       this.filter1=this.filter1+this.selectedValues[i]+','
    }
    for(let i=0;i<this.selectedPurities.length;i++){
      this.filter2=this.filter2+this.selectedPurities[i]+','
   }
  
   
    this.price=this.rangeValues[0]+'-'+this.rangeValues[1]
    this.msg.sendMsgEvent(this.filter1,this.filter2,this.price);
    this.filter1=''
    this.filter2=''
    }
  }
  
}



