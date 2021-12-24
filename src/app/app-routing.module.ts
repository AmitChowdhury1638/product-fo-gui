import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoginComponent } from './login/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { RegisterComponent } from './register/register/register.component';
import { CartFinalComponent } from './shopping-cart/cart/cart-final/cart-final.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'header', component: HeaderComponent },
  { path:'footer', component: FooterComponent} ,
  { path:'shoping-cart', component: ShoppingCartComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'list', component: ProductListComponent },
  { path:'payment', component: PaymentComponent },
  { path:'upload', component: ImageUploadComponent },
  { path:'contact', component: ContactUsComponent },
  { path:'product/:id', component: ProductViewComponent },
  { path:'cart', component: CartFinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
