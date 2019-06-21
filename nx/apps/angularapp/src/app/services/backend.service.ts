import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo, ToDoGroups } from '@nx/data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  readonly backendUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  addToDo(item: ToDo): Observable<any> {
    return this.http.post(this.backendUrl + '/api/addTodo', item);
  }

  fetchTodo(): Observable<ToDoGroups> {
    return this.http.get<ToDoGroups>(this.backendUrl + '/api/todos');
  }

  updateToDo(toDo: ToDo): Observable<any> {
    return this.http.put(this.backendUrl + '/api/todo', toDo);
  }
}
