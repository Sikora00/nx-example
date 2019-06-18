import { Dictionary } from '@ngrx/entity';

export interface ToDo {
  readonly id: string;
  title: string;
  done: boolean;
  group: ToDoGroupId;
}

export interface ToDoGroup {
  toDo: ToDo[];
  readonly title: string;
  readonly id: ToDoGroupId;
}

export enum ToDoGroupId {
  do = 'do',
  schedule = 'schedule',
  delegate = 'delegate',
  elimminate = 'elimminate'
}

export type ToDoGroups = Dictionary<ToDoGroup>;
