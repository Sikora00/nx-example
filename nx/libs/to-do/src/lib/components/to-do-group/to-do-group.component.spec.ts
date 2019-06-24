import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoGroupComponent } from './to-do-group.component';
import { TaskComponent } from '../task/task.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ToDoGroupComponent', () => {
  let component: ToDoGroupComponent;
  let fixture: ComponentFixture<ToDoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoGroupComponent, TaskComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

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
