import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ToDoPartialState } from './to-do.reducer';
import { toDoQuery } from './to-do.selectors';
import { LoadToDo, AddToDo } from './to-do.actions';

@Injectable()
export class ToDoFacade {
  loaded$ = this.store.pipe(select(toDoQuery.getLoaded));
  allToDo$ = this.store.pipe(select(toDoQuery.getAllToDo));
  selectedToDo$ = this.store.pipe(select(toDoQuery.getSelectedToDo));

  constructor(private store: Store<ToDoPartialState>) {}

  addTodo(): void {
  this.store.dispatch(new AddToDo());
  }

  loadAll(): void {
    this.store.dispatch(new LoadToDo());
  }
}
