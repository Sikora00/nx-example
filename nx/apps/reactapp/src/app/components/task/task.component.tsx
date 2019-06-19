import { ToDo } from '@nx/data';
import { MaterialCheckboxElement } from '@nx/ui';
import React from 'react';
interface Props {
  task: ToDo;
}
export class TaskComponent extends React.Component<Props, {}> {
  render(): any {
    return this.props.task ? (
      <li>
        <material-checkbox
          checked={this.props.task.done}
          title={this.props.task.title}
        />
      </li>
    ) : null;
  }
}
