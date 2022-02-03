import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LocaleService } from './locale/locale.service';
import { MessengerService } from './messenger.service';
import { RegisterService } from './register/register.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  language: any 
  code: any = "eng"
  map = new Map();
  clickEventSubscription: Subscription | undefined;
  username: any;

  constructor(private http: HttpClient,
              private messengerService: MessengerService,
              private registerService: RegisterService,
              private localeService: LocaleService) {

                this.localeService.getLocale().subscribe((data)=>{
                  data.forEach((item: {  language: string, code: string }) => {
                     this.map.set(item.language, item.code)
                    })
                  })

                  this.clickEventSubscription= this.messengerService.getLogin().subscribe((username)=>{
                    this.username = username
                    this.registerService.getUserDetailByUsername(this.username).subscribe((data)=>{
                      console.log(data)
                      this.language = data.language
                      this.code = this.map.get(this.language)
                      console.log(this.code)
                      this.messengerService.sendProducts();
                      //this.translateService.setDefaultLang(this.language);
                    })
                  })  

                  this.clickEventSubscription= this.messengerService.getLanguage().subscribe((language)=>{
                    console.log("language in filter service")
                    this.language = language
                      this.code = this.map.get(this.language)
                      this.messengerService.sendProducts();
                    })
                }

                

  getFilter1(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/enableFilter1', {
      params: {
        language: this.code
      }
    })
 }
 
  getFilter2(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/enableFilter2')
  } 

  getFilter3(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/enableFilter3')
  } 

  getSlider1(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/slider1')
  } 

  
}
