import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit{
  
  products:any=[];
  public constructor(private orderservice:OrderService, private cartService:CartService){

  }
  ngOnInit(): void {
   this.products=this.cartService.cartItems;
  }


   
}
