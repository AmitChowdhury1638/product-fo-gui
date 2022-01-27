import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productsUrl, productsUrlType } from 'src/app/config/api';
import { Observable, Subscription } from 'rxjs';
import { Image } from '../models/image';
import { MessengerService } from './messenger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseApiUrl = "http://localhost:8080/uploadFile"
  
  products: Product[]=[];
  language: any

  constructor(private http: HttpClient,
              private messengerService: MessengerService) { 
    
  }

  getProducts(t: string, p: string, pr: string, s: string): Observable<Product[]>{
    if(t=="" && p!="" && pr!="" && s==""){
    return this.http.get<Product[]>(productsUrl,{
      params:{
       // type: t,
        filter2: p,
        price: pr
       
      }
    });
  }else if(p=="" && t!="" && pr!="" && s!=""){
    return this.http.get<Product[]>(productsUrl,{
      params:{
        filter1: t,
       // purity: p,
        price: pr,
        sort: s
        
      }
    });
  }else if(p!="" && t=="" && pr!="" && s!=""){
    return this.http.get<Product[]>(productsUrl,{
      params:{
        filter2: p,
       // purity: p,
        price: pr,
        sort: s
      }
    });
  }else if(t!="" && p=="" && pr!="" && s==""){
    return this.http.get<Product[]>(productsUrl,{
      params:{
       // type: t,
        filter1: t,
        price: pr
      }
    });
  }else if(p=="" && t=="" && pr!=""){
    return this.http.get<Product[]>(productsUrl,{
      params:{
      //  type: t,
       // purity: p,
        price: pr
      }
    });
  }else{
    return this.http.get<Product[]>(productsUrl,{
      params:{
        filter1: t,
        filter2: p,
        price: pr,
        sort: s
      }
    });
  }
    }

   getById(id: any): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products/'+id)
  }

   getSortedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/sortProducts')
   }

   getSortedProductsByDesc(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/sortProductsDesc')
   }

   getImages(id: any): Observable<Image[]> {
     return this.http.get<Image[]>("http://localhost:8080/images",{
      params:{
        id: id
      }
    })
    }

    

  upload(file:any):Observable<any> {
             // Create form data
    const formData = new FormData(); 
             // Store form name as "file" with file data
    formData.append("file", file, file.name);          
             // Make http post request over api
             // with formData as req
    return this.http.post<any>(this.baseApiUrl, formData,{ observe: 'response' })
    }

    createEmail(name1: string,email1: string,message: string,toEmail: string,fromEmail: string) : Observable<Object>{
      return this.http.get('http://localhost:8080/sendemail',{
        params:{
        name: name1,
        email: email1,
        message: message,
        toEmail: toEmail,
        fromEmail: fromEmail
      }
      }
    );
  }
}
