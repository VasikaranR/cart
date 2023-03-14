import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit{
  
  public products:any={};
  public productsList:any=[];
  public email:any
  public id:any
  public date:any
  public dateAndTime:any
  public time:any 

  public constructor(private cartService:CartService,private orderService:OrderService,private activate:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activate.params.subscribe({
      next:(data:any)=>{
        console.log("mm",data)
       this.email=data.email
      },
      error:(err:any)=>{
        console.error(err)
      }

    })

   this.products= this.cartService.items;

    this.id=Math.floor(Math.random() * 100);
    this.dateAndTime= new Date().toLocaleString().split(",")
    this.date=this.dateAndTime[0];
    this.time=this.dateAndTime[1]


  console.log(this.id)
  console.log(this.date)
  console.log(this.time)
   for(let i=0;i<this.products.length;i++){
    this.products[i].email=localStorage.getItem('email');
    this.products[i].orderId=this.id;
    this.products[i].date=this.date;
    this.products[i].time=this.time;
   }
   this.updateOrders(this.products);
   console.log("ayo",this.products)
   this.fetchOrders();
   
  }


  updateOrders(data:any){
    console.log("entered")
    this.orderService.postMyOrders(data).subscribe(({
      next:(data:any)=>{
        console.log("the added data ",data);
      },
      error:(err:any)=>{
        console.error(err)
      }
    }));
  }

  fetchOrders(){
    this.orderService.getMyOrders(this.email).subscribe((orderData:any)=>{
      console.log("soo...",orderData)
      this.productsList=orderData;
    })
  }



   
}
