import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseAnnimationComponent } from './mouse-annimation.component';

describe('MouseAnnimationComponent', () => {
  let component: MouseAnnimationComponent;
  let fixture: ComponentFixture<MouseAnnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseAnnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseAnnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
