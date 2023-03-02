import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {

  
  public products: any = [];
  public singleProduct:any;
  public cartListId:any=[]
  public isAdded:any;
  public user=localStorage.getItem('role');



  constructor(private service:ProductService,private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
     this.service.getProducts().subscribe({
      next:(data)=>{
        this.products=data;
        console.log("subject",data)
      }
     })

  }


  

  public addToCart(productId:any) {
     
    this.singleProduct = this.products.filter((product:any) => {
      this.cartListId=productId;
      console.log("",this.cartListId);
      return product.id === productId;
    });

    this.cartService.addProductToCart(this.singleProduct[0],this.cartListId);
    
  }


  public removeItem(data:number){
    
    console.log("in component",typeof(+data));
    
    this.service.removeProducts(data)

  }

  public productDetails(productId:any)
  {

    this.service.getSingleItem(productId);
    this.router.navigate([`/description/`+productId]);
    
  }
}

