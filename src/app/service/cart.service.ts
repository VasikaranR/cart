import { Injectable, OnInit } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  productPrize:number=0;
  cartId:any=[]
  items:any=[]
  
  constructor() { }
  ngOnInit(): void {
    console.log("ithaan",this.cartId);  
  }

  public cartItems:any = [];
  public selectedItems:any=[];
  public products = new Subject();
  public singleProduct:any;

  public cartList:any=[]
  


  public getProducts(): Observable<any> {
    console.log('this.cartItems :', this.cartItems);
    return this.products.asObservable();
  }

  public addProductToCart(product:any,cartlistId:any){
    this.cartId.push(cartlistId);

    console.log("let me",this.cartId)
    this.cartItems.push(product);
    this.products.next(this.cartItems);
    this.selectedItems=this.cartItems;
    this.items=this.cartItems

    return this.cartItems
  }



  public getTotalItems(){
     return this.cartItems.length
  }

  public emptyCart(){
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  public removeItem(productId:any){
    this.cartItems.map((item: any,index: any)=>{
      if(item.id==productId){
       this.productPrize=item.price;
       console.log()
       this.cartItems.splice(index,1)
      }
    })
    return  this.productPrize;
  }



  public addToCart(productId:any) {
   console.log("ithu product ID",productId)
    this.getProducts().subscribe({
      next:(data)=>{
        this.cartId=productId;
        this.cartList=data;
        console.log("data subject",data)
        this.singleProduct = this.cartList.filter((product:any) => {
          return product.id === productId;
        });
      }
     })
  }

  public addToMyOrders(){
    this.getProducts().subscribe({
    })

  }
 
 

}

