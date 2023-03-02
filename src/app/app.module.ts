import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ProfileIconComponent } from './profile-icon/profile-icon.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { ToastrModule } from 'ngx-toastr';
import { MyordersComponent } from './myorders/myorders.component';
import { DescriptionComponent } from './description/description.component';
import { RecommendComponent } from './recommend/recommend.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    SidenavComponent,
    HeaderComponent,
    ProfileIconComponent,
    AddProductsComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    CarouselComponent,
    ViewcartComponent,
    MyordersComponent,
    DescriptionComponent,
    RecommendComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
