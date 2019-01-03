import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouLettersComponent } from './thankyou-letters.component';

describe('ThankyouLettersComponent', () => {
  let component: ThankyouLettersComponent;
  let fixture: ComponentFixture<ThankyouLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
