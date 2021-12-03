import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLottery1Component } from './single-lottery1.component';

describe('SingleLottery1Component', () => {
  let component: SingleLottery1Component;
  let fixture: ComponentFixture<SingleLottery1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLottery1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLottery1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
