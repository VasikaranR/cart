import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Call } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('getProducts',()=>{
    const callGetProducts=spyOn(service,'getProducts').and.callThrough();
    service.getProducts();
    expect(callGetProducts).toHaveBeenCalled();
  })
  
  it('Initiate addProducts to cart',()=>{
    let product:any;
    let cartListId:any;
    const callAddProductToCart=spyOn(service,'addProductToCart').and.callThrough();
    service.addProductToCart(product,cartListId);
    expect(callAddProductToCart).toHaveBeenCalled();
  })

  it('emptycart initialize',()=>{
    const callEmptyCart= spyOn(service,'emptyCart').and.callThrough();
    service.emptyCart();
    expect(callEmptyCart).toHaveBeenCalled();
  })

  it('decrease item count',()=>{
    const callDecreaseItemCount = spyOn(service,'decreaseItemCount').and.callThrough();
    service.decreaseItemCount();
    expect(callDecreaseItemCount).toHaveBeenCalled();
  })

  it('remove the item ',()=>{
    let productId:any
    const callRemovetheItem = spyOn(service,'removeItem').and.callThrough();
    service.removeItem(productId);
    expect(callRemovetheItem).toHaveBeenCalled();
  })

  it('add to cart ',()=>{
    let productId:any;
    const callAddToCart = spyOn(service,'addToCart').and.callThrough();
    service.addToCart(productId)
    expect(callAddToCart).toHaveBeenCalled();
  })

  it('getcount initialize',()=>{
    const callGetCount = spyOn(service,'getCount').and.callThrough();
    service.getCount();
    expect(callGetCount).toHaveBeenCalled();
  })

  it('decrease count',()=>{
   const callDecreaseCount = spyOn(service,'decreaseCount').and.callThrough();
   service.decreaseCount();
   expect(callDecreaseCount).toHaveBeenCalled();
  })

  



});
