import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('MainService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get Products',() =>{
    const callGetProducts= spyOn(service,'getProducts').and.callThrough();
    service.getProducts();
    expect(callGetProducts).toHaveBeenCalled();
  })

  it('should add products',()=>{
    let data:any;
    const callAddProducts =spyOn(service,'addProducts').and.callThrough();
    service.addProducts(data);
    expect(callAddProducts).toHaveBeenCalled();

  })

  it('should remove products',()=>{
    let productId:any;
    const callRemoveProducts = spyOn(service,'removeProducts').and.callThrough();
    service.removeProducts(productId);
    expect(callRemoveProducts).toHaveBeenCalled();
  })

  it('load images',()=>{
    const loadImages = spyOn(service,'getImages').and.callThrough();
    service.getImages();
    expect(loadImages).toHaveBeenCalled();
  })

  it('get a single item',()=>{
    let singleItemId:any
    const getSingleItem = spyOn(service,'getSingleItem').and.callThrough();
    service.getSingleItem(singleItemId);
    expect(getSingleItem).toHaveBeenCalled();
  })
  
  it('initiate suggest product',()=>{
    let categoryType:any
    const suggestProduct = spyOn(service,'suggestProduct').and.callThrough();
    service.suggestProduct(categoryType);
    expect(suggestProduct).toHaveBeenCalled();
  })
  

  it('update products',()=>{
    let data:any;
    let id:any
    const callUpdateProducts = spyOn(service,'updateProducts').and.callThrough();
    service.updateProducts(data,id);
    expect(callUpdateProducts).toHaveBeenCalled();
  })



});
