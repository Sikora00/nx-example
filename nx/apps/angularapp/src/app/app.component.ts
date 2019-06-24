import { Component } from '@angular/core';
import { ToDo, ToDoGroup } from '@nx/data';
import { Observable } from 'rxjs';

import { ToDoFacade } from './+state/to-do.facade';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  doGroup: Observable<ToDoGroup> = this.toDoFacade.doGroup$;
  scheduleGroup: Observable<ToDoGroup> = this.toDoFacade.scheduleGroup$;
  delegateGroup: Observable<ToDoGroup> = this.toDoFacade.delegateGroup$;
  eliminateGroup: Observable<ToDoGroup> = this.toDoFacade.eliminateGroup$;

  constructor(private toDoFacade: ToDoFacade) {
    this.toDoFacade.loadAll();
  }

  addTodo(event: ToDo): void {
    this.toDoFacade.addTodo(event);
  }

  onUpdateToDo(event: ToDo): void {
    this.toDoFacade.updateToDo(event);
  }
}
