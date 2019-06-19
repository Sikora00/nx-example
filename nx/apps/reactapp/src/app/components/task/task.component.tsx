import { ToDo } from '@nx/data';
import { MaterialCheckboxElement } from '@nx/ui';
import React from 'react';
interface Props {
  task: ToDo;
  onTaskDoneChange: (task: ToDo) => void;
}
export default class TaskComponent extends React.Component<Props, {}> {
  checkboxRef: React.RefObject<MaterialCheckboxElement>;
  constructor(props: Props) {
    super(props);
    this.checkboxRef = React.createRef();
  }
  componentDidMount(): void {
    this.checkboxRef.current.addEventListener('checkChange', event => {
      this.onTaskDoneChange();
    });
  }
  onTaskDoneChange(): void {
    this.props.onTaskDoneChange({
      ...this.props.task,
      done: !this.props.task.done
    });
  }
  render(): any {
    return (
      <li>
        <material-checkbox
          ref={this.checkboxRef}
          checked={this.props.task.done}
          title={this.props.task.title}
        />
      </li>
    );
  }
}
