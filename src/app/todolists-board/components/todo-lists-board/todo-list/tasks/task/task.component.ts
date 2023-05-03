import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/todolists-board/models/tasks.model';
import { TaskStatus } from 'src/app/core/enums/taskStatus.enum';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() isChecked!: boolean;
  @Output() removeTaskEvent = new EventEmitter<{ todoId: string; taskId: string }>();
  taskStatus = TaskStatus;
  constructor() {}

  removeTaskHandler() {
    this.removeTaskEvent.emit({ todoId: this.task.todoListId, taskId: this.task.id });
  }
}
