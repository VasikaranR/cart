import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MyordersComponent } from './myorders.component';

describe('MyordersComponent', () => {
  let component: MyordersComponent;
  let fixture: ComponentFixture<MyordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyordersComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(MyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call update orders',()=>{
    let data:any;
    const callUpdateOrders=spyOn(component,'updateOrders').and.callThrough();
    component.updateOrders(data);
    expect(callUpdateOrders).toHaveBeenCalled();
  })

  it('call fetch orders',()=>{
    const callFetchOrders=spyOn(component,'fetchOrders').and.callThrough();
    component.fetchOrders();
    expect(callFetchOrders).toHaveBeenCalled();
  })

  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });

  

});
