import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexxComponent } from './indexx.component';

describe('IndexxComponent', () => {
  let component: IndexxComponent;
  let fixture: ComponentFixture<IndexxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
