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

  constructor() {}

  addTask(value: string): void {
    if (value) {
      this.addToDo.emit({ id: uuid(), title: value, group: this.group.id });
      this.addTaskInput.nativeElement.value = '';
    }
  }
}
