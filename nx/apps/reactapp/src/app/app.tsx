import './app.scss';

import { ToDo, ToDoGroupId, ToDoGroups, ToDoGroup } from '@nx/data';
import { uuid } from '@nx/utils';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ToDoGroupComponent from './components/to-do-group/to-do-group.component';

interface State {
  groups: ToDoGroups;
}
export class App extends React.Component<{}, State> {
  readonly backendUrl = 'http://localhost:3333';
  constructor(props: {}) {
    super(props);

    this.onTaskChange = this.onTaskChange.bind(this);
  }

  componentDidMount(): void {
    this.loadToDoGroups();
  }

  async loadToDoGroups(): Promise<void> {
    const response = await fetch(this.backendUrl + '/api/todos');
    const groups = await response.json();
    this.setState({ groups });
  }

  onTaskChange(task: ToDo): void {
    fetch(this.backendUrl + '/api/todo', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
  }

  render(): any {
    return (
      <Router>
        <eisenhower-matrix-header />
        <div className="matrix">
          <div className="matrix__column" />
          <div className="matrix__column">
            <h2>Urgent</h2>
          </div>
          <div className="matrix__column">
            <h2>Less urgent</h2>
          </div>
          <div className="matrix__column matrix__column--vertical">
            <h2>Important</h2>
          </div>
          <ToDoGroupComponent
            group={
              this.state &&
              this.state.groups &&
              this.state.groups[ToDoGroupId.do]
            }
            onTaskDoneChange={this.onTaskChange}
            id="do"
          />
          <ToDoGroupComponent
            group={
              this.state &&
              this.state.groups &&
              this.state.groups[ToDoGroupId.schedule]
            }
            onTaskDoneChange={this.onTaskChange}
            id="schedule"
          />
          <div className="matrix__column matrix__column--vertical">
            <h2>Less Important</h2>
          </div>
          <ToDoGroupComponent
            group={
              this.state &&
              this.state.groups &&
              this.state.groups[ToDoGroupId.delegate]
            }
            onTaskDoneChange={this.onTaskChange}
            id="delegate"
          />
          <ToDoGroupComponent
            group={
              this.state &&
              this.state.groups &&
              this.state.groups[ToDoGroupId.elimminate]
            }
            onTaskDoneChange={this.onTaskChange}
            id="eliminate"
          />
        </div>
      </Router>
    );
  }
}

export default App;
