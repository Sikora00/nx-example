import { Injectable } from '@nestjs/common';
import { ToDo } from '@nx/data';
import { uuid } from '@nx/utils';

@Injectable()
export class AppService {
  todos: ToDo[] = [
    { id: uuid(), title: 'Todo 1' },
    { id: uuid(), title: 'Todo 2' }
  ];

  getData(): ToDo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      id: uuid(),
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
