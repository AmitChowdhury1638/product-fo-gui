import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) { }

  getFilter1(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/enableFilter1')
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

  getConfiguration(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/configuration')
 }

 getConfigurationByKey(key: string): Observable<any>{
  return this.http.get<any>('http://localhost:8080/configurationByKey',{
    params:{
      key: key
    }
  })
}
}
