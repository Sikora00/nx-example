import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ToDo } from '@nx/data';

@Component({
  selector: 'nx-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit{
  @ViewChild('checkbox', { static: false })
  checkbox: ElementRef<HTMLInputElement>;
  @Input()
  task: ToDo;

  @Output()
  doTask = new EventEmitter<ToDo>();

  ngAfterViewInit(): void {
      this.checkbox.nativeElement.addEventListener('change', event => {
        this.onCheck();
      });
  }

  onCheck(): void {
    this.doTask.emit({...this.task, done: !this.task.done});
  }
}
