import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ready2Component } from './ready2.component';

describe('Ready2Component', () => {
  let component: Ready2Component;
  let fixture: ComponentFixture<Ready2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ready2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ready2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
