import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject();
  subject1 = new Subject();
  subject2 = new Subject();
  subject3 = new Subject();
  subject4 = new Subject<any>();
  subject5 = new Subject();


  constructor() { }

  sendMsg(product: Product){
    console.log(product)
    this.subject.next(product)
  }

  getMsg(){
    return this.subject.asObservable()
  }

  sendMsgEvent(filter1: String,filter2: String,price: String){
    this.subject1.next({filter1,filter2,price});
  }

  getMsgEvent():Observable<any>{
    return this.subject1.asObservable()
  }

  sendMsgSort(sortedValues: string){
    console.log(sortedValues)
    this.subject2.next(sortedValues)
  }

  getMsgSort(){
    return this.subject2.asObservable()
  }

  sendLogin(username: String){
    this.subject3.next(username);
  }

  getLogin():Observable<any>{
    return this.subject3.asObservable()
  }

  sendLanguage(language: String){
    
    this.subject4.next(language);
  }

  getLanguage(){
    console.log("language")
    return this.subject4.asObservable()
  }

  sendLoginValue(value: boolean){
    this.subject5.next(value);
  }

  getLoginValue():Observable<any>{
    return this.subject5.asObservable()
  }

  sendProducts(){
    this.subject5.next();
  }

  getProducts():Observable<any>{
    return this.subject5.asObservable()
  }
  
}
