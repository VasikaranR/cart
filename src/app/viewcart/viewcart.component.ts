import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../service/cart.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {

  constructor(private cart:CartService, private orderService:OrderService , private router:Router, private toaster:ToastrService) { }

  cartlist:any=[]
  selectedItems:any=[];
  public priceChanged:boolean=false;


  total:number=0;
  email:any=localStorage.getItem('email');

  ngOnInit(): void {
    this.cartlist=this.cart.items;
   
    console.log("oo",this.cartlist)
    this.totalAmount();
  }

  public totalAmount(){
    this.cartlist.map((item: { price: number; }) => {
      this.total += item.price
      console.log("total",this.total)
      

      if(this.priceChanged===true){
        console.log("inside total true",this.priceChanged)
        this.priceChanged=false;
        this.total-=item.price;
        this.priceChanged=false;
      }
    });
    
  }

  public mapToMyOrders(){
    
    let email=localStorage.getItem('email');
    this.orderService.getMyOrders(email);

    this.toaster.success('order placed successfully','success');
    this.router.navigate([`/myorders/`+email])
  }

  public removeItem(productId:any,productPrice:any){
    this.priceChanged=true;
    this.cartlist.map((item: any,index: any)=>{
      if(item.id==productId){
       this.cartlist.splice(index,1)
       this.total=this.total-productPrice;
      }

    })
  
  }

  



}
