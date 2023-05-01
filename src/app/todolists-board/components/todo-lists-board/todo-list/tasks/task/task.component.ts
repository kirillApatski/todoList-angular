import { Component, Input } from '@angular/core';
import { Task } from 'src/app/todolists-board/models/tasks.model';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
}
