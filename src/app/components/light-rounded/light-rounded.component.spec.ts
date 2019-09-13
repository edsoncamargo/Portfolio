import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightRoundedComponent } from './light-rounded.component';

describe('LightRoundedComponent', () => {
  let component: LightRoundedComponent;
  let fixture: ComponentFixture<LightRoundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightRoundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
