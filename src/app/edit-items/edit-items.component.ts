import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.scss']
})
export class EditItemsComponent implements OnInit{


  editForm:FormGroup
public data: any="hi"
public singleItem:any;
public id :any
public product:any=[];
public productName!:string;



public title:string=this.data.name;
public description:string='product description';
public price:string='10000';


  constructor(private fb:FormBuilder, private productService:ProductService, private activate:ActivatedRoute){

    this.editForm=this.fb.group({
      productName: new FormControl('',Validators.required),
      productDescription: new FormControl('',Validators.required),
      productPrice: new FormControl('',Validators.required ),
    })

  }


  public ngOnInit(): void {

  this.activate.params.subscribe({
    next:(data:any)=>{
      this.id=data.id;
    }
  })

  this.productService.getSingleItem(this.id).subscribe(data=>{
    this.product=data;
    this.title=this.product[0].name;
    this.description=this.product[0].description;
    this.price=this.product[0].price;
    console.log("okay",this.product[0].name)
    console.log("name",this.productName)
  });
 
  }


  

  public onButtonClick():any {
    this.title=this.product.name
    this.productService.updateProducts(this.editForm.value,this.id).subscribe((data)=>{
      console.log("updated datas",data)
    })
    }



    


}
