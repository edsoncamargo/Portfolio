import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdsFacebookComponent } from './lds-facebook.component';

describe('LdsFacebookComponent', () => {
  let component: LdsFacebookComponent;
  let fixture: ComponentFixture<LdsFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdsFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdsFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
