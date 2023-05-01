import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.dev';
import { BehaviorSubject, map } from 'rxjs';
import { Todo } from 'src/app/todolists-board/models/todos.model';
import { CommonResponse } from 'src/app/core/models/core.models';

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
  addTodo(todoTitle: string) {
    this.http
      .post<CommonResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`, {
        title: todoTitle,
      })
      .pipe(
        map((res) => {
          return [...this.todos$.getValue(), res.data.item];
        })
      )
      .subscribe((todos) => {
        this.todos$.next(todos);
      });
  }
  removeTodo(todoId: string) {
    this.http
      .delete<CommonResponse>(`${environment.baseUrl}/todo-lists/${todoId}`)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter((todo) => todo.id !== todoId);
        })
      )
      .subscribe((todos) => {
        this.todos$.next(todos);
      });
  }
  updateTodoTitle(data: { todoId: string; titleTodo: string }) {
    this.http
      .put<CommonResponse>(`${environment.baseUrl}/todo-lists/${data.todoId}`, {
        title: data.titleTodo,
      })
      .pipe(
        map(() => {
          return this.todos$
            .getValue()
            .map((tl) => (tl.id === data.todoId ? { ...tl, title: data.titleTodo } : tl));
        })
      )
      .subscribe((todos) => {
        this.todos$.next(todos);
      });
  }
}
