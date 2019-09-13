import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdsFacebookBlueComponent } from './lds-facebook-blue.component';

describe('LdsFacebookBlueComponent', () => {
  let component: LdsFacebookBlueComponent;
  let fixture: ComponentFixture<LdsFacebookBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdsFacebookBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdsFacebookBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
