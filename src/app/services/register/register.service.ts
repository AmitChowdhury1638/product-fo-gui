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

  getUserDetailByUsername(username: any):  Observable<any>{
    return this.http.get<any>('http://localhost:8080/userDetailByUsername'
 , {
    params:{
      username: username
    }
  }
 );
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
    console.log(data)
    return this.http.put('http://localhost:8080/userDetail/2', data);
  }

  editCartId(cartId: any,username: any):  Observable<any>{
     return this.http.get<any>('http://localhost:8080/updateCartId'
  , {
     params:{
       cartIds: cartId,
       username: username
     }
   }
  );
  }

  editWishlistId(wishlistId: any,username: any):  Observable<any>{
    return this.http.get<any>('http://localhost:8080/updateWishlistId'
 , {
    params:{
      wishlistIds: wishlistId,
      username: username
    }
  }
 );
 }

  deleteCartIds(cartId: any,username: any):  Observable<any>{
    console.log(cartId)
     return this.http.get<any>('http://localhost:8080/deleteCartIds'
  , {
     params:{
       cartIds: cartId,
       username: username
     }
   }
  );
  }

  deleteWishlistIds(wishlistId: any,username: any):  Observable<any>{
    console.log(wishlistId)
     return this.http.get<any>('http://localhost:8080/deleteWishlistIds'
  , {
     params:{
       wishlistIds: wishlistId,
       username: username
     }
   }
  );
  }
}
