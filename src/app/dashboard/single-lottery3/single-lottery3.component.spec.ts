import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLottery3Component } from './single-lottery3.component';

describe('SingleLottery3Component', () => {
  let component: SingleLottery3Component;
  let fixture: ComponentFixture<SingleLottery3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLottery3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLottery3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
