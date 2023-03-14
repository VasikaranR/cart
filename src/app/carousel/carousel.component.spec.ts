import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call onPrevious click',()=>{
    const callOnPreviousClick=spyOn(component,'onPreviousClick').and.callThrough();
    component.onPreviousClick();
    expect(callOnPreviousClick).toHaveBeenCalled();
  })

  it('call onNext click',()=>{
    const callOnNextClick=spyOn(component,'onNextClick').and.callThrough();
    component.onNextClick();
    expect(callOnNextClick).toHaveBeenCalled();
  })

  it('call oninit',()=>{
    const callNgOnit=spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(callNgOnit).toHaveBeenCalled()
  });
});
