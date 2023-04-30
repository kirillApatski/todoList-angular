import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListsBoardRoutingModule } from 'src/app/todolists-board/todo-lists-board-routing.module';
import { FormsModule } from '@angular/forms';
import { TodoListBoardComponent } from 'src/app/todolists-board/todo-list-board.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListBoardComponent, TodoListComponent],
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
