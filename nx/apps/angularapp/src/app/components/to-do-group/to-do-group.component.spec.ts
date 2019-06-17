import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoGroupComponent } from './to-do-group.component';

describe('ToDoGroupComponent', () => {
  let component: ToDoGroupComponent;
  let fixture: ComponentFixture<ToDoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
