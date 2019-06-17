import { Injectable } from '@nestjs/common';
import { ToDo, ToDoGroup, ToDoGroupId, ToDoGroups } from '@nx/data';
import { uuid } from '@nx/utils';

@Injectable()
export class AppService {
  groups: Map<ToDoGroupId, ToDoGroup> = new Map();

  constructor() {
    this.groups.set(ToDoGroupId.do, {
      id: ToDoGroupId.do,
      toDo: [
        { id: uuid(), done: false, title: 'Todo 1', group: ToDoGroupId.do }
      ]
    });
    this.groups.set(ToDoGroupId.schedule, {
      id: ToDoGroupId.schedule,
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
      toDo: []
    });
    this.groups.set(ToDoGroupId.elimminate, {
      id: ToDoGroupId.elimminate,
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
    console.log(toDo);
    if (group) {
      console.log(toDo);
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
