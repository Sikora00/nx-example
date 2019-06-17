import { Injectable } from '@nestjs/common';
import { ToDo, ToDoGroup, ToDoGroupId, ToDoGroups } from '@nx/data';
import { uuid } from '@nx/utils';

@Injectable()
export class AppService {
  groups: Map<ToDoGroupId, ToDoGroup> = new Map();

  constructor() {
    this.groups.set(ToDoGroupId.do, {
      id: ToDoGroupId.do,
      toDo: [{ id: uuid(), title: 'Todo 1' }]
    });
    this.groups.set(ToDoGroupId.schedule, {
      id: ToDoGroupId.schedule,
      toDo: [{ id: uuid(), title: 'Todo 2' }]
    });
    this.groups.set(ToDoGroupId.delegate, {id: ToDoGroupId.delegate, toDo: []})
    this.groups.set(ToDoGroupId.elimminate, {id: ToDoGroupId.elimminate, toDo: []})
  }

  getData(): Map<ToDoGroupId, ToDoGroup> {
    return this.groups;
  }

  addToDo(toDo: ToDo): void {
    const group = this.groups.get(toDo.group);
    if (group) {
      group.toDo.push(toDo);
      this.groups.set(toDo.group, group);
    }
  }
}
