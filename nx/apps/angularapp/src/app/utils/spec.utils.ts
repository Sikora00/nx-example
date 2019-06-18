import { ToDo, ToDoGroupId, ToDoGroups } from '@nx/data';
import { uuid } from '@nx/utils';

export namespace SpecUtils {
  export function createToDo(id = uuid(), title = ''): ToDo {
    return {
      id,
      title: title || `title-${id}`,
      done: false,
      group: ToDoGroupId.do
    };
  }

  export function createToDoGroups(): ToDoGroups {
    return {
      [ToDoGroupId.do]: {
        title: 'Do',
        id: ToDoGroupId.do,
        toDo: [SpecUtils.createToDo('AAA'), SpecUtils.createToDo('BBB')]
      },
      [ToDoGroupId.schedule]: {
        title: 'Schedule',
        id: ToDoGroupId.schedule,
        toDo: [SpecUtils.createToDo()]
      },
      [ToDoGroupId.delegate]: {
        title: 'Delegate',
        id: ToDoGroupId.delegate,
        toDo: []
      },
      [ToDoGroupId.elimminate]: {
        title: 'Eliminate',
        id: ToDoGroupId.elimminate,
        toDo: []
      }
    };
  }
}
