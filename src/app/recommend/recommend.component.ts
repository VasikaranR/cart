import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements  OnInit{

  constructor(private activate:ActivatedRoute,private product:ProductService){

  }

  public productID:any;
  public category:any
  public recommendList:any=[]
  public currentSlide = 0;

  public data:any=[]



  ngOnInit(): void {

    this.activate.params.subscribe({
      next:(data:any)=>{
        this.productID=data.id;
        this.suggestProduct(data.id)
      },
      error:(err:any)=>{
        console.error(err);
      },
    })

  }

  public suggestProduct(productId:any){
    this.product.getSingleItem(productId).subscribe({
      next:(data:any)=>{
         this.category=data[0].category;
         this.getItemsOnCatergory(this.category);

      }
    })
  
  }

  public getItemsOnCatergory(id:any){
    this.product.suggestProduct(this.category).subscribe((data)=>{
      this.recommendList=data;
    })
 
  }

  public onPreviousClick() {
    const previous = this.currentSlide - 1;
    console.log(previous);
    this.currentSlide = previous < 0 ? this.recommendList.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  public onNextClick() {
    const next = this.currentSlide + 1;
    console.log(next);
    this.currentSlide = next === this.recommendList.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
    
  }


}

