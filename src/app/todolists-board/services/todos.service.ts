import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.dev';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/todolists-board/models/todos.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$ = new BehaviorSubject<Todo[]>([]);
  constructor(private http: HttpClient) {}
  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`).subscribe((todos) => {
      this.todos$.next(todos);
    });
  }
  createTodo(todoTitle: string) {
    this.http.post<Todo>(`${environment.baseUrl}/todo-lists`, { todoTitle }).subscribe((todo) => {
      this.todos$.next([...this.todos$.value, todo]);
    });
  }
}
