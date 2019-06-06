import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsuitComponent } from './productsuit.component';

describe('ProductsuitComponent', () => {
  let component: ProductsuitComponent;
  let fixture: ComponentFixture<ProductsuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
