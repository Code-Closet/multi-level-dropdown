import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpledropdownComponent } from './simpledropdown.component';

describe('SimpledropdownComponent', () => {
  let component: SimpledropdownComponent;
  let fixture: ComponentFixture<SimpledropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpledropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpledropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
