import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private http: HttpClient) { }

  getAdvertisement(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/advertisement')
 }

 getAdvertisementByName(name: string): Observable<any>{
  return this.http.get<any>('http://localhost:8080/advertisementByName',{
    params:{
      name: name
    }
  })
}
}
