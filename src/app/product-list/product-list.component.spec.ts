import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addTocart',()=>{
    let data:any;
    const addToCart=spyOn(component,'addToCart').and.callThrough();
    component.addToCart(data);
    expect(addToCart).toHaveBeenCalled();
  })

  it('should call RemoveItem',()=>{
    let data:any;
    const removeItem=spyOn(component,'removeItem').and.callThrough();
    component.removeItem(data);
    expect(removeItem).toHaveBeenCalled();
  })

  it('should call productDetails',()=>{
    let productId:any;
    const productDetails=spyOn(component,'productDetails').and.callThrough();
    component.productDetails(productId);
    expect(productDetails).toHaveBeenCalled();
  }
  )

  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });


});
