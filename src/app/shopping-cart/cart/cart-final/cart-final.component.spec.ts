import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFinalComponent } from './cart-final.component';

describe('CartFinalComponent', () => {
  let component: CartFinalComponent;
  let fixture: ComponentFixture<CartFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
