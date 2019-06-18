import { Injectable } from '@nestjs/common';
import { ToDo, ToDoGroup, ToDoGroupId, ToDoGroups } from '@nx/data';
import { uuid } from '@nx/utils';

@Injectable()
export class AppService {
  groups: Map<ToDoGroupId, ToDoGroup> = new Map();

  constructor() {
    this.groups.set(ToDoGroupId.do, {
      id: ToDoGroupId.do,
      title: 'Do',
      toDo: [
        { id: uuid(), done: false, title: 'Todo 1', group: ToDoGroupId.do }
      ]
    });
    this.groups.set(ToDoGroupId.schedule, {
      id: ToDoGroupId.schedule,
      title: 'Schedule',
      toDo: [
        {
          id: uuid(),
          done: false,
          title: 'Todo 2',
          group: ToDoGroupId.schedule
        }
      ]
    });
    this.groups.set(ToDoGroupId.delegate, {
      id: ToDoGroupId.delegate,
      title: 'Delegate',
      toDo: []
    });
    this.groups.set(ToDoGroupId.elimminate, {
      id: ToDoGroupId.elimminate,
      title: 'Eliminate',
      toDo: []
    });
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

  updateToDo(toDo: ToDo): void {
    const group = this.groups.get(toDo.group);
    if (group) {
      group.toDo = group.toDo.map((tD: ToDo) => {
        if (toDo.id === tD.id) {
          return toDo;
        } else {
          return tD;
        }
      });
      this.groups.set(toDo.group, group);
    }
  }
}
