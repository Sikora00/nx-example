import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpecUtils } from '../../../../../../apps/angularapp/src/app/utils/spec.utils';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = SpecUtils.createToDo();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
