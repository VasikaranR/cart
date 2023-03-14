import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  
editItem(itemId:any) {
  this.router.navigate(['edititems/'+itemId])
}


  public items:any=[];
  public itemId:any;
  public productId:any;

  public user=localStorage.getItem('role')


  public constructor(private productService:ProductService, private router:Router,private activate:ActivatedRoute, private cartService:CartService){


  }


  ngOnInit(): void {
    this.activate.params.subscribe({
      next:(data:any)=>{
        this.itemId=data.id;
      },
      error:(err:any)=>{
        console.error(err)
      }

    })
    this.getSingleItem();
    
    }

    public getSingleItem(){
      this.productService.getSingleItem(this.itemId).subscribe((data)=>{
        this.items=data;
      })
    }

    public redirect(){
      this.router.navigate(['/products'])
    }

    public AddToCart(product:any) {
      this.cartService.addProductToCart(this.items);


    }
}
