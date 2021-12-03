import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLotteryMainComponent } from './single-lottery-main.component';

describe('SingleLotteryMainComponent', () => {
  let component: SingleLotteryMainComponent;
  let fixture: ComponentFixture<SingleLotteryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLotteryMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLotteryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
