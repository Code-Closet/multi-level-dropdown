import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleleveldropdownComponent } from './singleleveldropdown.component';

describe('SingleleveldropdownComponent', () => {
  let component: SingleleveldropdownComponent;
  let fixture: ComponentFixture<SingleleveldropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleleveldropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleleveldropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
