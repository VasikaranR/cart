import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  public cartItems:any=[];
  public selectedCartItems:any;

  public totalAmount:number=0;
  public priceChanged:boolean=false;
  public itemPrice:number=0;

  constructor(private cartService:CartService,private router:Router) { }

  public ngOnInit(): void {
    this.cartService.getProducts().subscribe(data => {
      this.cartItems = data;
      this.selectedCartItems=this.cartItems;
      console.log("standard",this.cartService.cartProductCount);
      this.total()
      
    });

  }
  
 

  public removeItem(productId:any,productPrice:any){

    this.cartService.decreaseCount();
    this.cartService.getCount();
    this.itemPrice= this.cartService.removeItem(productId)
    this.totalAmount-=this.itemPrice;


  }


  public total(){
    this.cartItems.map((item: { price: number; }) => {
      this.totalAmount += item.price;
    });
    
    if(this.priceChanged===true){
      this.totalAmount=this.totalAmount-this.itemPrice;
      this.priceChanged=false;

    }
  }

  public emptyCart(): void {
    this.cartService.emptyCart();

  }

  public redirect(){
    this.router.navigate(['viewcart'])
  }

 
  

}
