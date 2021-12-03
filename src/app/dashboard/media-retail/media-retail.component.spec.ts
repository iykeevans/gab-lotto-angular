import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaRetailComponent } from './media-retail.component';

describe('MediaRetailComponent', () => {
  let component: MediaRetailComponent;
  let fixture: ComponentFixture<MediaRetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaRetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
