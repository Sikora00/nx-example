import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixElementComponent } from './matrix-element.component';

describe('MatrixElementComponent', () => {
  let component: MatrixElementComponent;
  let fixture: ComponentFixture<MatrixElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
