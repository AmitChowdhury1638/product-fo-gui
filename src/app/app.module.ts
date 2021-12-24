
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import {CarouselModule} from 'primeng/carousel';
import { MenuComponent } from './menu/menu.component';
import {MegaMenuModule} from 'primeng/megamenu';

import { TopmenuComponent } from './topmenu/topmenu.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import {ButtonModule} from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavComponent } from './nav/nav.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import {SliderModule} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {GalleriaModule} from 'primeng/galleria';
import { DialogService } from 'primeng/dynamicdialog';
import { PaymentComponent } from './payment/payment.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ContactUsComponent } from './contact-us/contact-us.component'
import { AccordionModule } from 'primeng/accordion';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartFinalComponent } from './shopping-cart/cart/cart-final/cart-final.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent,
    TopmenuComponent,
    ProductCarouselComponent,
    ShoppingCartComponent,
    NavComponent,
    HeadComponent,
    FootComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    ImageUploadComponent,
    ContactUsComponent,
    ProductViewComponent,
    CartFinalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    MegaMenuModule,
    ButtonModule,
    FontAwesomeModule,
    SliderModule,
    FormsModule,
    CheckboxModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    GalleriaModule,
    AccordionModule,
    RadioButtonModule,

  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
