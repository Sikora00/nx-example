import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoGroup, ToDo } from '@nx/data';
import { uuid } from '@nx/utils';
import { toDoQuery } from '../../+state/to-do.selectors';

@Component({
  selector: 'nx-to-do-group',
  templateUrl: './to-do-group.component.html',
  styleUrls: ['./to-do-group.component.scss']
})
export class ToDoGroupComponent {
  @ViewChild('addTaskInputElement', { static: true })
  addTaskInput: ElementRef<HTMLInputElement>;

  @Input()
  group: ToDoGroup;

  @Output()
  addToDo: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  @Output()
  updateToDo = new EventEmitter<ToDo>();

  constructor() {}

  addTask(value: string): void {
    if (value) {
      this.addToDo.emit({
        id: uuid(),
        done: false,
        title: value,
        group: this.group.id
      });
      this.addTaskInput.nativeElement.value = '';
    }
  }


  onUpdateToDo(event: ToDo): void {
    this.updateToDo.emit(event);
  }
}
