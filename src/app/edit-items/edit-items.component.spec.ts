import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { observable } from 'rxjs';
import { ProductService } from '../service/product.service';

import { EditItemsComponent } from './edit-items.component';

describe('EditItemsComponent', () => {
  let component: EditItemsComponent;
  let fixture: ComponentFixture<EditItemsComponent>;
  let service:ProductService
  let spy: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(EditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should require valid  productName', () => {
    component.editForm.setValue({
      "productName":"Mi LED Smart TV 4A 108 cm (43)",
      "productDescription": "",
      "productPrice":"",
    });

    expect(component.editForm.valid).toEqual(false);
  });

  it('should have a valid productDescription',() =>{
    component.editForm.setValue({
      "productName":"",
      "productDescription": "this is a washing machine",
      "productPrice":"",

    });
    expect(component.editForm.valid).toEqual(false)
  })

  it('should have a valid price',()=>{
    component.editForm.setValue({
      "productName":"",
      "productDescription": "",
      "productPrice":"5000",
    })
    expect(component.editForm.valid).toEqual(false)

  })

  it('on button click called',()=>{
    const callButtonClick=spyOn(component,'onButtonClick').and.callThrough();
        component.onButtonClick()
        expect(callButtonClick).toHaveBeenCalled();
  })

  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });

});
