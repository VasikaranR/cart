import { Injectable, OnInit } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  public productPrize:number=0;
  public cartId:any=[]
  public items:any=[]

  public cartProductCount:number=0;  

  
  constructor() { }
  ngOnInit(): void {
    console.log("ithaan",this.cartId);  
    this.getCount();
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

  public addProductToCart(product:any,cartlistId?:any){
    this.cartId.push(cartlistId);
    this.cartItems.push(product);
    this.products.next(this.cartItems);
    this.selectedItems=this.cartItems;
    this.items=this.cartItems

    return this.cartItems
  }

  public emptyCart(){
    this.cartItems.length = 0;
    this.cartProductCount=0;
    this.products.next(this.cartItems);
  }

  public decreaseItemCount(){
    this.cartProductCount--;
    console.log("ivolo",this.cartProductCount)
  }


  public removeItem(productId:any){
       this.decreaseCount();
       this.cartItems.map((item: any,index: any)=>{
      if(item.id==productId){
       this.productPrize=item.price;
       this.cartItems.splice(index,1);
      }
    })
    return  this.productPrize;
  }



  public addToCart(productId:any) {
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

  public getCount(){  
    console.log("count",this.cartProductCount)
    return this.cartProductCount;
  }

  public decreaseCount(){
    this.cartProductCount--;
  }

   
 
 

}

