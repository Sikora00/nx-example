import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo, ToDoGroups } from '@nx/data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}

  addToDo(item: ToDo): Observable<any> {
    return this.http.post('/api/addTodo', item);
  }

  fetchTodo(): Observable<ToDoGroups> {
    return this.http.get<ToDoGroups>('/api/todos');
  }

  updateToDo(toDo: ToDo): Observable<any> {
    return this.http.put('api/todo', toDo);
  }
}
