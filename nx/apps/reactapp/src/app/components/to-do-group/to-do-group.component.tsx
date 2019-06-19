import React from 'react';
import './to-do-group.component.scss';
import { MdAlarmOn } from 'react-icons/md';
import { ToDoGroup, ToDo } from '@nx/data';
import { TaskComponent } from '../task/task.component';
interface Props {
  id: string;
  group: ToDoGroup;
}
export default class ToDoGroupComponent extends React.Component<Props, {}> {
  render(): any {
    return (
      <div id={this.props.id} className="to-do-group">
        <div className="to-do-group__content">
          <div className="to-do-group__title">
            <div className="to-do-group__title__wrapper">
              <div className="to-do-group__icon">
                <MdAlarmOn />
              </div>
              <h2>{this.props.group.title}</h2>
            </div>
          </div>
          <div className="to-do-group__list-wrapper">
            <div className="to-do-group__list">
              <ul>
                {this.props.group.toDo.map((task: ToDo) => (
                  <TaskComponent key={task.id} task={task} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
