import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getConfiguration(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/configuration')
 }

 getConfigurationByKey(key: string, language: string): Observable<any>{
  return this.http.get<any>('http://localhost:8080/configurationByKey',{
    params:{
      key: key,
      language: language
    }
  })
}

}
