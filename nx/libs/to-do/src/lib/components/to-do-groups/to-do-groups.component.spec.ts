import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoGroupsComponent } from './to-do-groups.component';

describe('ToDoGroupsComponent', () => {
  let component: ToDoGroupsComponent;
  let fixture: ComponentFixture<ToDoGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
