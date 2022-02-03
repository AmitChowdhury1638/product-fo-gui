import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { LocaleService } from '../locale/locale.service';
import { MessengerService } from '../messenger.service';
import { RegisterService } from '../register/register.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

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
      console.log("welcome")
      this.username = username
      console.log(this.username)
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
      this.language = language
        this.code = this.map.get(this.language)
        console.log(this.code)
        this.messengerService.sendProducts();
      })
    }

  getConfiguration(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/configuration')
 }

 getConfigurationByKey(key: string): Observable<any>{
  return this.http.get<any>('http://localhost:8080/configurationByKey',{
    params:{
      key: key,
      language: this.code
    }
  })
}

}
