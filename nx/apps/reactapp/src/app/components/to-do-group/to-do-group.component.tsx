import './to-do-group.component.scss';

import { ToDo, ToDoGroup, ToDoGroupId } from '@nx/data';
import React from 'react';
import { MdAlarmOn, MdEvent, MdRemoveCircleOutline, MdPersonAdd } from 'react-icons/md';

import TaskComponent from '../task/task.component';
import { uuid } from '@nx/utils';

interface Props {
  id: string;
  group: ToDoGroup;
  onTaskDoneChange: (task: ToDo) => void;
  onAddTask: (task: ToDo) => void;
}
export default class ToDoGroupComponent extends React.Component<Props, {}> {
  inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);

    this.inputRef = React.createRef();
    this.onTaskDoneChange = this.onTaskDoneChange.bind(this);
    this.onAddTask = this.onAddTask.bind(this);
  }
  onTaskDoneChange(task: ToDo): void {
    this.props.onTaskDoneChange(task);
  }
  onAddTask(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      this.props.onAddTask({
        id: uuid(),
        done: false,
        title: this.inputRef.current.value,
        group: this.props.group.id
      });
      this.inputRef.current.value = '';
    }
  }
  getIconJSX(): JSX.Element {
    switch (this.props.group.id) {
      case ToDoGroupId.do:
        return <MdAlarmOn />;
      case ToDoGroupId.schedule:
        return <MdEvent />;
      case ToDoGroupId.delegate:
        return <MdPersonAdd />;
      case ToDoGroupId.elimminate:
        return <MdRemoveCircleOutline />;
    }
  }
  render(): JSX.Element {
    return (
      <div id={this.props.id} className="to-do-group">
        <div className="to-do-group__content">
          <div className="to-do-group__title">
            <div className="to-do-group__title__wrapper">
              <div className="to-do-group__icon">
                {this.props.group && this.getIconJSX()}
              </div>
              <h2>{this.props.group && this.props.group.title}</h2>
            </div>
          </div>
          <div className="to-do-group__list-wrapper">
            <div className="to-do-group__list">
              <ul>
                {this.props.group &&
                  this.props.group.toDo.map((task: ToDo) => (
                    <TaskComponent
                      key={task.id}
                      task={task}
                      onTaskDoneChange={this.onTaskDoneChange}
                    />
                  ))}
              </ul>
            </div>
          </div>
          <div className="to-do-group__add-new-task">
            <span>+</span>
            <input
              type="text"
              placeholder="New task"
              ref={this.inputRef}
              onKeyDown={this.onAddTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
