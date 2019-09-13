import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsErrorComponent } from './guards-error.component';

describe('GuardsErrorComponent', () => {
  let component: GuardsErrorComponent;
  let fixture: ComponentFixture<GuardsErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardsErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
