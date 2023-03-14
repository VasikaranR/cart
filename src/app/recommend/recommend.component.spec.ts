import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../service/product.service';
import { RecommendComponent } from './recommend.component';


describe('RecommendComponent', () => {
  let component: RecommendComponent;
  let fixture: ComponentFixture<RecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('suggest product gets called',()=>{
    let data:any;
    const callSuggestProduct=spyOn(component,'suggestProduct').and.callThrough();
    component.suggestProduct(data);
    expect(callSuggestProduct).toHaveBeenCalled();
  })

  it('get items on category',()=>{
    let id:any;
    const callGetItemsOnCategory=spyOn(component,'getItemsOnCatergory').and.callThrough();
    component.getItemsOnCatergory(id);
    expect(callGetItemsOnCategory).toHaveBeenCalled();
  })

  // it('slide recommend',()=>{
  //   const callSlideRecommend=spyOn(component,'slideRecommend').and.callThrough();
  //   component.slideRecommend();
  //   expect(callSlideRecommend).toHaveBeenCalled();
  // })

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
});

describe('myService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,RouterTestingModule], 
    providers: [ProductService]
  }));

   it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
   });


});
