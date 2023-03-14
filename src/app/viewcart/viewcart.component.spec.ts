import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { ViewcartComponent } from './viewcart.component';

describe('ViewcartComponent', () => {
  let component: ViewcartComponent;
  let fixture: ComponentFixture<ViewcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcartComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,ToastrModule.forRoot() ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });
 
  it('initiate totalAmount',()=>{
    const callTotalAmount=spyOn(component,'totalAmount').and.callThrough();
    component.totalAmount();
    expect(callTotalAmount).toHaveBeenCalled();
  })

  it('initialize map to myOrders',()=>{
    const callInitialize= spyOn(component,'mapToMyOrders').and.callThrough();
    component.mapToMyOrders();
    expect(callInitialize).toHaveBeenCalled();
  })

  it('initiate remove items',()=>{
    let productId:any;
    let productPrice:any;
    const callRemoveItem = spyOn(component,'removeItem').and.callThrough();
    component.removeItem(productId,productPrice);
    expect(callRemoveItem).toHaveBeenCalled();
  })

});
