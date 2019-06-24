import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { uuid } from '@nx/utils';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { ToDoGroups, ToDo, ToDoGroupId } from '@nx/data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly backendUrl = 'http://xxx';
  groups: ToDoGroups;
  ToDoGroupId = ToDoGroupId;

  constructor(
    private http: HttpClient,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.loadToDoGroups();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async loadToDoGroups(): Promise<void> {
    const response = this.http
      .get(this.backendUrl + '/api/todos')
      .subscribe((res: ToDoGroups) => {this.groups = res});
  }

  onAddTask(task: ToDo): void {
    this.http
      .post(this.backendUrl + '/api/addToDo', task)
      .subscribe(() => this.loadToDoGroups());
  }

  onTaskChange(task: ToDo): void {
    this.http
      .put(this.backendUrl + '/api/todo', task)
      .subscribe(() => this.loadToDoGroups());
  }
}
