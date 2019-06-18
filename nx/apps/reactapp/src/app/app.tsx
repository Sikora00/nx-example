import './app.scss';

import { ToDo, ToDoGroupId, ToDoGroups } from '@nx/data';
import { uuid } from '@nx/utils';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ToDoGroupComponent from './components/to-do-group/to-do-group.component';

export class App extends React.Component {
  doGroup = {};
  groups = this.createToDoGroups();

  createToDo(id = uuid(), title = ''): ToDo {
    return {
      id,
      title: title || `title-${id}`,
      done: false,
      group: ToDoGroupId.do
    };
  }

  createToDoGroups(): ToDoGroups {
    return {
      [ToDoGroupId.do]: {
        title: 'Do',
        id: ToDoGroupId.do,
        toDo: [this.createToDo('AAA'), this.createToDo('BBB')]
      },
      [ToDoGroupId.schedule]: {
        title: 'Schedule',
        id: ToDoGroupId.schedule,
        toDo: [this.createToDo()]
      },
      [ToDoGroupId.delegate]: {
        title: 'Delegate',
        id: ToDoGroupId.delegate,
        toDo: []
      },
      [ToDoGroupId.elimminate]: {
        title: 'Eliminate',
        id: ToDoGroupId.elimminate,
        toDo: []
      }
    };
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
          <ToDoGroupComponent group={this.groups[ToDoGroupId.do]} id="do" />
          <ToDoGroupComponent
            group={this.groups[ToDoGroupId.schedule]}
            id="schedule"
          />
          <div className="matrix__column matrix__column--vertical">
            <h2>Less Important</h2>
          </div>
          <ToDoGroupComponent
            group={this.groups[ToDoGroupId.delegate]}
            id="delegate"
          />
          <ToDoGroupComponent
            group={this.groups[ToDoGroupId.elimminate]}
            id="eliminate"
          />
        </div>
      </Router>
    );
  }
}

export default App;
