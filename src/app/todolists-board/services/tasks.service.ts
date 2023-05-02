import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.dev';
import { BehaviorSubject, map } from 'rxjs';
import { DomainTask, GetTasksResponse, Task } from 'src/app/todolists-board/models/tasks.model';
import { CommonResponse } from 'src/app/core/models/core.models';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks$ = new BehaviorSubject<DomainTask>({});

  constructor(private http: HttpClient) {}

  getTasks(todoId: string) {
    return this.http
      .get<GetTasksResponse>(`${environment.baseUrl}/todo-lists/${todoId}/tasks`)
      .pipe(map((res) => res.items))
      .subscribe((tasks) => {
        const newState = this.tasks$.getValue();
        newState[todoId] = tasks;

        this.tasks$.next(newState);
      });
  }
  addTask(data: { todoId: string; taskTitle: string }) {
    this.http
      .post<CommonResponse<{ item: Task }>>(
        `${environment.baseUrl}/todo-lists/${data.todoId}/tasks`,
        {
          title: data.taskTitle,
        }
      )
      .pipe(
        map((res) => {
          const stateTasks = this.tasks$.getValue();
          const newTask = res.data.item;
          stateTasks[data.todoId] = [...stateTasks[data.todoId], newTask];
          return stateTasks;
        })
      )
      .subscribe((tasks) => {
        this.tasks$.next(tasks);
      });
  }
  removeTask(data: { todoId: string; taskId: string }) {
    this.http
      .delete<CommonResponse>(
        `${environment.baseUrl}/todo-lists/${data.todoId}/tasks/${data.taskId}`
      )
      .pipe(
        map(() => {
          const stateTasks = this.tasks$.getValue();
          stateTasks[data.todoId] = stateTasks[data.todoId].filter(
            (task) => task.id !== data.taskId
          );
          return stateTasks;
        })
      )
      .subscribe((tasks) => {
        this.tasks$.next(tasks);
      });
  }
}
