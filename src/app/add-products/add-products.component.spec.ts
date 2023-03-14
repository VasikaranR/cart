import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ProductService } from '../service/product.service';

import { AddProductsComponent } from './add-products.component';

describe('AddProductsComponent', () => {
  let component: AddProductsComponent;
  let fixture: ComponentFixture<AddProductsComponent>;
  let service:ProductService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule, ToastrModule.forRoot() ],
      providers:[ProductService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid id',()=>{
    component.addProductForm.setValue({
      "id":"1",
       "name":"",
       "price":"",
       "image":"",
       "category":"",
       "description":""
    });
    expect(component.addProductForm.valid).toEqual(false);
  })

  it('should have a valid name',()=>{
    component.addProductForm.setValue({
      "id":"",
       "name":"led Tv",
       "price":"",
       "image":"",
       "category":"",
       "description":""
    })
    expect(component.addProductForm.valid).toEqual(false);
  })

  it('should have a valid price',()=>{
    component.addProductForm.setValue({
      "id":"",
       "name":"",
       "price":"22000",
       "image":"",
       "category":"",
       "description":""
    })
    expect(component.addProductForm.valid).toEqual(false);
  })

  it('should have a valid image',()=>{
    component.addProductForm.setValue({
      "id":"",
       "name":"",
       "price":"",
       "image":"https:url",
       "category":"",
       "description":""
    })
    expect(component.addProductForm.valid).toEqual(false);
  })

  it('should have a valid category',()=>{
    component.addProductForm.setValue({
      "id":"",
       "name":"",
       "price":"",
       "image":"",
       "category":"suits",
       "description":""
    })
    expect(component.addProductForm.valid).toEqual(false);
  })

  it('should have a valid description',()=>{
    component.addProductForm.setValue({
      "id":"",
       "name":"",
       "price":"",
       "image":"",
       "category":"",
       "description":"70 inch marble display "
    })
    expect(component.addProductForm.valid).toEqual(false);
  })


  it('call AddProduct',()=>{
    const callAddProduct=spyOn(component,'addProduct').and.callThrough();
    component.addProduct();
    expect(callAddProduct).toHaveBeenCalled();
  })


  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });

  // it('call the add products in service',()=>{
  //   const callAddProducts=spyOn(service,'addProducts').and.callThrough();
  //   expect(callAddProducts).toHaveBeenCalled();


  // })

});
