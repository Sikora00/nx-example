import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ToDoPartialState } from './to-do.reducer';
import { toDoQuery } from './to-do.selectors';
import { LoadToDo, AddToDo } from './to-do.actions';
import { ToDo } from '@nx/data';

@Injectable()
export class ToDoFacade {
  loaded$ = this.store.pipe(select(toDoQuery.getLoaded));
  doGroup$ = this.store.pipe(select(toDoQuery.getDoGroup));
  scheduleGroup$ = this.store.pipe(select(toDoQuery.getScheduleGroup));
  delegateGroup$ = this.store.pipe(select(toDoQuery.getDelegateGroup));
  eliminateGroup$ = this.store.pipe(select(toDoQuery.getEliminateGroup));
  allToDo$ = this.store.pipe(select(toDoQuery.getAllToDoGroups));
  selectedToDo$ = this.store.pipe(select(toDoQuery.getSelectedToDo));

  constructor(private store: Store<ToDoPartialState>) {}

  addTodo(item: ToDo): void {
    this.store.dispatch(new AddToDo(item));
  }

  loadAll(): void {
    this.store.dispatch(new LoadToDo());
  }
}
