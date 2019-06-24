import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo, ToDoGroup } from '@nx/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-to-do-groups',
  templateUrl: './to-do-groups.component.html',
  styleUrls: ['./to-do-groups.component.scss']
})
export class ToDoGroupsComponent {
  @Input()
  doGroup: ToDoGroup;
  @Input()
  scheduleGroup: ToDoGroup;
  @Input()
  delegateGroup: ToDoGroup;
  @Input()
  eliminateGroup: ToDoGroup;

  @Output()
  addToDo = new EventEmitter<ToDo>();
  @Output()
  updateToDo = new EventEmitter<ToDo>();
  constructor() {}

  onAddToDo(event: ToDo): void {
    this.addToDo.emit(event);
  }

  onUpdateToDo(event: ToDo): void {
    this.updateToDo.emit(event);
  }
}
