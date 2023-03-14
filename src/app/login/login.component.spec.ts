import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule, ToastrModule.forRoot() ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.loginForm.setValue({
      "email": "invalidemail", 
      "password": ""
    });

    expect(component.loginForm.valid).toEqual(false);
  });

  it('should have a valid password',() =>{
    component.loginForm.setValue({
      "email": "", 
      "password": "helloha"
    });
    expect(component.loginForm.valid).toEqual(false)
  });

  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });

  it('call onNext click',()=>{
    const callLogin=spyOn(component,'login').and.callThrough();
    component.login();
    expect(callLogin).toHaveBeenCalled();
  })

});
