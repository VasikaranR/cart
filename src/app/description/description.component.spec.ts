import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DescriptionComponent } from './description.component';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call getSingle item',()=>{
    const callGetSingleItem=spyOn(component,'getSingleItem').and.callThrough();
    component.getSingleItem();
    expect(callGetSingleItem).toHaveBeenCalled();
  })

  it('call edit items',()=>{
    let itemId:number=5
    const callEditItem=spyOn(component,'editItem').and.callThrough();
    component.editItem(itemId);
    expect(callEditItem).toHaveBeenCalled();
  })


  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });
});
