import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoGroupsComponent } from './components/to-do-groups/to-do-groups.component';
import { ToDoGroupComponent } from './components/to-do-group/to-do-group.component';
import { TaskComponent } from './components/task/task.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [ToDoGroupComponent, TaskComponent, ToDoGroupsComponent],
  exports: [ToDoGroupsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToDoModule {}
