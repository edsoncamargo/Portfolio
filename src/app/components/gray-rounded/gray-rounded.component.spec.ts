import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayRoundedComponent } from './gray-rounded.component';

describe('GrayRoundedComponent', () => {
  let component: GrayRoundedComponent;
  let fixture: ComponentFixture<GrayRoundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayRoundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
