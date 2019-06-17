import { Dictionary } from '@ngrx/entity';

export interface ToDo {
  id: string;
  title: string;
  group?: ToDoGroupId;
}

export interface ToDoGroup {
  toDo: ToDo[];
  id: ToDoGroupId;
}

export enum ToDoGroupId {
  do = 'do',
  schedule = 'schedule',
  delegate = 'delegate',
  elimminate = 'elimminate'
}

export type ToDoGroups = Dictionary<ToDoGroup>;
