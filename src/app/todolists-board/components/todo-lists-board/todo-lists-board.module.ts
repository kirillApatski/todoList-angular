import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListsBoardRoutingModule } from 'src/app/todolists-board/components/todo-lists-board/todo-lists-board-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoListsBoardComponent } from 'src/app/todolists-board/components/todo-lists-board/todo-lists-board.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { TodoListComponent } from 'src/app/todolists-board/components/todo-lists-board/todo-list/todo-list.component';
import { TasksComponent } from './todo-list/tasks/tasks.component';
import { TaskComponent } from './todo-list/tasks/task/task.component';

@NgModule({
  declarations: [TodoListsBoardComponent, TodoListComponent, TasksComponent, TaskComponent],
  imports: [
    CommonModule,
    TodoListsBoardRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class TodoListsBoardModule {}
