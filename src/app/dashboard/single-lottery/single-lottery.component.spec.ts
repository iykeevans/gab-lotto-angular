import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLotteryComponent } from './single-lottery.component';

describe('SingleLotteryComponent', () => {
  let component: SingleLotteryComponent;
  let fixture: ComponentFixture<SingleLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLotteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
