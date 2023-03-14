import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router:Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

   
  });

 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show should initially have false',() =>{
    expect(component.show).toEqual(false);
  })

  it('sideBarShow should initially have false',() =>{
    expect(component.sidebarShow).toEqual(false);
  })

  it('cartProduct Count should initially be zero',() =>{
    expect(component.cartProductCount).toEqual(0);
  })


  it('call showprofile',()=> {
    const callShowProfile=spyOn(component,'showProfile').and.callThrough();
  component.showProfile()
  expect(callShowProfile).toHaveBeenCalled();
  })
 
  it('call showprofile',()=> {
    const callCloseProfile=spyOn(component,'closeProfile').and.callThrough();
  component.closeProfile()
  expect(callCloseProfile).toHaveBeenCalled();
  })
  
  it('call redirectTo',()=>{
    const redirectTo=spyOn(component,'redirectTo').and.callThrough();
    component.redirectTo();
    expect(redirectTo).toHaveBeenCalled();
  })

  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });

  // it('navigates to path',fakeAsync(()=>{
  //   router.navigate([''])
  //   tick();
  //   expect(location.pathname).toBe('/myorders')

  // }))



});
