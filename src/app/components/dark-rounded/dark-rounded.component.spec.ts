import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkRoundedComponent } from './dark-rounded.component';

describe('DarkRoundedComponent', () => {
  let component: DarkRoundedComponent;
  let fixture: ComponentFixture<DarkRoundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkRoundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
