import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidropdownComponent } from './multidropdown.component';

describe('MultidropdownComponent', () => {
  let component: MultidropdownComponent;
  let fixture: ComponentFixture<MultidropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultidropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultidropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
