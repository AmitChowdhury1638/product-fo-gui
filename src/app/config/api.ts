
import { HttpClient } from '@angular/common/http'
import {​​​​​​​​​ environment }​​​​​​​​​ from'src/environments/environment'
import { isConstructorDeclaration } from 'typescript'
 
export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:8080'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/carts'
export const wishlistUrl = baseUrl + '/wishlist'
export const productsUrlType = baseUrl + '/products'




