import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the orders',()=>{
    let email:any
    const callGetMyOrders= spyOn(service,'getMyOrders').and.callThrough();
    service.getMyOrders(email);
    expect(callGetMyOrders).toHaveBeenCalled();

  })

  it('should post the orders',()=>{
    let data:any
    const callPostMyOrders= spyOn(service,'postMyOrders').and.callThrough();
    service.postMyOrders(data);
    expect(callPostMyOrders).toHaveBeenCalled();
  })
});
