import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { GuardService } from './service/guard.service';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { DescriptionComponent } from './description/description.component';
import { EditItemsComponent } from './edit-items/edit-items.component';

const routes: Routes = [
  {path:'products',component:ProductListComponent },
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addproducts',component:AddProductsComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'myorders/:email',component:MyordersComponent},
  {path:'description/:id',component:DescriptionComponent},
  {path:'edititems/:id',component:EditItemsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
