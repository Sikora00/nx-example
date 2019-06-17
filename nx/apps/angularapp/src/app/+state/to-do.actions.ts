import { Action } from '@ngrx/store';
import { ToDo, ToDoGroup, ToDoGroups } from '@nx/data';

export enum ToDoActionTypes {
  AddToDo = '[ToDo] Add ToDo',
  AddToDoSuccess = '[ToDo] Add ToDo Success',
  LoadToDo = '[ToDo] Load ToDo',
  ToDoLoaded = '[ToDo] ToDo Loaded',
  ToDoLoadError = '[ToDo] ToDo Load Error'
}

export class AddToDo implements Action {
  readonly type = ToDoActionTypes.AddToDo;
  constructor(public payload: ToDo) {}
}

export class AddToDoSuccess implements Action {
  readonly type = ToDoActionTypes.AddToDoSuccess;
}

export class LoadToDo implements Action {
  readonly type = ToDoActionTypes.LoadToDo;
}

export class ToDoLoadError implements Action {
  readonly type = ToDoActionTypes.ToDoLoadError;
  constructor(public payload: any) {}
}

export class ToDoLoaded implements Action {
  readonly type = ToDoActionTypes.ToDoLoaded;
  constructor(public payload: ToDoGroups) {}
}

export type ToDoAction = LoadToDo | ToDoLoaded | ToDoLoadError;

export const fromToDoActions = {
  AddToDo,
  AddToDoSuccess,
  LoadToDo,
  ToDoLoaded,
  ToDoLoadError
};
