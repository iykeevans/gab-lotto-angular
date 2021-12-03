import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlVideoPlayComponent } from './owl-video-play.component';

describe('OwlVideoPlayComponent', () => {
  let component: OwlVideoPlayComponent;
  let fixture: ComponentFixture<OwlVideoPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlVideoPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlVideoPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
