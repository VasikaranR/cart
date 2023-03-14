import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

public addProductForm!: FormGroup;

constructor(private fb:FormBuilder, private productService:ProductService, private router:Router, private toaster:ToastrService) { }

  public ngOnInit(): void {
    this.addProductForm=this.fb.group({
      id:new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      description: new FormControl('', Validators.required),
    })
    
  }

  public addProduct() {
    this.productService.addProducts(this.addProductForm.value).subscribe({
      next:(data:any)=>{
        console.log('data added succesfully',data)
        this.toaster.success('product Added','Success');
        this.router.navigate(['products'])

      },
      error: (err:any)=>{
        console.error(err);
        this.toaster.error('OOPS','Something went wrong');
      }
    })
  }

}
