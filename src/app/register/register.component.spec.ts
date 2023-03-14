import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule, ToastrModule.forRoot() ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.signInForm.setValue({
      "firstName": "", 
      "lastName":"",
      "email": "invalidemail", 
      "password": ""
    });

    expect(component.signInForm.valid).toEqual(false);
  });

  it('should require a valid firstname',() =>{
    component.signInForm.setValue({
      "firstName": "vasikaran", 
      "lastName":"",
      "email": "", 
      "password": ""
    });

    expect(component.signInForm.valid).toEqual(false)
  })

  it('should require a valid lastName',() =>{
    component.signInForm.setValue({
      "firstName": "", 
      "lastName":"R",
      "email": "", 
      "password": ""
    });

    expect(component.signInForm.valid).toEqual(false)
  })

  it('should have a valid password',() =>{
    component.signInForm.setValue({
      "firstName": "", 
      "lastName":"",
      "email": "", 
      "password": "helloha"
    });
    expect(component.signInForm.valid).toEqual(false)
  })

  it('should call the show access which triggers toaster',() =>{
    const callShowToaster=spyOn(component,'showSuccess').and.callThrough();
    component.showSuccess();
    expect(callShowToaster).toHaveBeenCalled();
  })

  it('signIn function invoked',()=>{
    const callSignIn= spyOn(component,'signIn').and.callThrough();
    component.signIn();
    expect(callSignIn).toHaveBeenCalled();
  })

  it('call onInit',()=>{
    const callOnit= spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callOnit).toHaveBeenCalled();
  })



})

// describe('SignIn',()=>{
//   let component:RegisterComponent;
//   let fixture:ComponentFixture<RegisterComponent>

//   beforeEach(async()=>{
//      await TestBed.configureTestingModule({
//       declarations: [ RegisterComponent ],
//       imports:[HttpClientTestingModule,RouterTestingModule, ToastrModule.forRoot() ]

//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//   })

  //  it('signIn method should be called', () => {
  //   spyOn(component, 'signIn'); 
  //   fixture.detectChanges(); 
  //   expect(component.signIn).toHaveBeenCalled(); 

  // });
// })

   

