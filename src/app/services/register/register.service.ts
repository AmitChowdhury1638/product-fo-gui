import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getUserDetail(): Observable<any> {
    return this.http.get('http://localhost:8080/userDetail')
  }

  getUserDetailById(id: number){
    return this.http.get('http://localhost:8080/userDetail/'+id)
  }

  deleteUserDetail(data: any) {
    console.log('id :'+data.id);
    return this.http.delete('http://localhost:8080/userDetail'+'/'+data.id);
  }

  createUserDetail(data: any) {
    console.log(data)
    return this.http.post('http://localhost:8080/userDetail', data, {responseType: 'arraybuffer'});
  }

  editUserDetail(data: any) {
    console.log("in put")
    return this.http.put('http://localhost:8080/userDetail'+'/'+data.id, data);
  }

  editCartId(cartId: any):  Observable<any>{
     return this.http.get<any>('http://localhost:8080/updateCartId'
  , {
     params:{
       cartIds: cartId
     }
   }
  );
  }

  editWishlistId(wishlistId: any):  Observable<any>{
    return this.http.get<any>('http://localhost:8080/updateWishlistId'
 , {
    params:{
      wishlistIds: wishlistId
    }
  }
 );
 }

  deleteCartIds(cartId: any):  Observable<any>{
    console.log(cartId)
     return this.http.get<any>('http://localhost:8080/deleteCartIds'
  , {
     params:{
       cartIds: cartId
     }
   }
  );
  }

  deleteWishlistIds(wishlistId: any):  Observable<any>{
    console.log(wishlistId)
     return this.http.get<any>('http://localhost:8080/deleteWishlistIds'
  , {
     params:{
       wishlistIds: wishlistId
     }
   }
  );
  }
}
