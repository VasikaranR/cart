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
  public  selectedCartItems:any;

  public totalAmount:number=0;
  public priceChanged:boolean=false;
  public itemPrice:number=0;

  constructor(private cartService:CartService,private router:Router) { }

  public ngOnInit(): void {
    this.cartService.getProducts().subscribe(data => {
      this.cartItems = data;
      this.selectedCartItems=this.cartItems;
      console.log("hola",this.cartItems)
      this.total()

    });
  }


  public removeItem(productId:any,productPrice:any){
    this.priceChanged=true;
    console.log("inside removeitem",this.priceChanged)
    this.itemPrice= this.cartService.removeItem(productId)
    this.totalAmount-=this.itemPrice;
    console.log("a thong",this.itemPrice);


  }


  public total(){
    this.cartItems.map((item: { price: number; }) => {
      console.log("initial",this.totalAmount)
      console.log("item price",item.price)
      this.totalAmount += item.price;
      console.log("what is tota;",this.totalAmount)

     
    });
    
    if(this.priceChanged===true){
      console.log("inside total true",this.priceChanged)
      console.log("va",this.itemPrice)
      this.totalAmount=this.totalAmount-this.itemPrice;
      this.priceChanged=false;

    }
  }

  public emptyCart(): void {
    this.cartService.emptyCart();
    this.totalAmount=0;
  }

  public redirect(){
    this.router.navigate(['viewcart'])
  }

 
  

}
