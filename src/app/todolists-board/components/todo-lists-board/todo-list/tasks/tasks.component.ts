import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/todolists-board/services/tasks.service';
import { map, Observable } from 'rxjs';
import { Task } from 'src/app/todolists-board/models/tasks.model';

@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  @Input() todoId!: string;

  constructor(private tasksService: TasksService) {}
  titleTask = '';

  ngOnInit() {
    this.tasks$ = this.tasksService.tasks$.pipe(
      map((tasks) => {
        return tasks[this.todoId];
      })
    );
    this.tasksService.getTasks(this.todoId);
  }
  addTaskHandler() {
    this.tasksService.addTask({ todoId: this.todoId, taskTitle: this.titleTask });
    this.titleTask = '';
  }
  removeTask(data: { todoId: string; taskId: string }) {
    this.tasksService.removeTask(data);
  }
}
