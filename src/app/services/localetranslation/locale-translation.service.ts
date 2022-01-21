import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LocaleTranslationService {

  constructor(private http: HttpClient) { }

  getLocaleTranslation(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/localeTranslation')
 }

  getLocaleTranslationByKey(key: string, localeCode: string): Observable<any>{
    console.log(localeCode)
    return this.http.get<any>('http://localhost:8080/localeTranslationByKey',{
      params:{
        key: key,
        localeCode: localeCode
      }
    })
  }
}
