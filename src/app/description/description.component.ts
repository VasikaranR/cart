import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public items:any=[];
  public itemId:any;
  public productId:any;


  public constructor(private productService:ProductService, private router:Router){


  }


  ngOnInit(): void {

    this.itemId=this.productService.singleItemId;
    console.log(this.itemId)
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

}
