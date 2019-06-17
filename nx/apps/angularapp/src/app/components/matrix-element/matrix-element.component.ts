import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '@nx/data';
import { uuid } from '@nx/utils';

@Component({
  selector: 'nx-matrix-element',
  templateUrl: './matrix-element.component.html',
  styleUrls: ['./matrix-element.component.scss']
})
export class MatrixElementComponent {
  @ViewChild('addTaskInputElement', { static: true })
  addTaskInput: ElementRef<HTMLInputElement>;

  @Input()
  todos: Observable<ToDo[]>;

  @Output()
  addToDo: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor() {}

  addTask(value: string): void {
    console.log(value)
    if (value) {
      console.log(this.addTaskInput);
      this.addToDo.emit({ id: uuid(), title: value });
      this.addTaskInput.nativeElement.value = '';
    }
  }
}
