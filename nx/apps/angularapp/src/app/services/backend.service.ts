import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '@nx/data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}

  addToDo(): Observable<Object> {
    return this.http.post('/api/addTodo', {});
  }

  fetchTodo(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('/api/todos');
  }
}
