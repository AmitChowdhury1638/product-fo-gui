import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor(private http: HttpClient) { }

  getLocale(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/locale')
 }
}
