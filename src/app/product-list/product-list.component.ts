import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nextCellIndex } from '@syncfusion/ej2-angular-grids';
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
    this.cartService.cartProductCount++;
    this.cartService.addProductToCart(this.singleProduct[0],this.cartListId);
    
  }


  public removeItem(data:string){
    
    console.log("in component",data);
    
    this.service.removeProducts(data).subscribe({
      next:(data:any)=>{
        console.log("deleted item",data);
      },
      error:(err:any)=>{
        console.error(err);
      }
      
    })

  }

  public productDetails(productId:any)
  {

    this.service.getSingleItem(productId);
    this.router.navigate([`/description/`+productId]);
    
  }
}

