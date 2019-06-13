import { Component } from '@angular/core';
import { ToDo } from '@nx/data';
import { ToDoFacade } from './+state/to-do.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularapp';
  todos: Observable<ToDo[]> = this.toDoFacade.allToDo$;

  constructor(private toDoFacade: ToDoFacade) {
    this.toDoFacade.loadAll();
  }

  addTodo(): void {
    this.toDoFacade.addTodo();
  }
}
