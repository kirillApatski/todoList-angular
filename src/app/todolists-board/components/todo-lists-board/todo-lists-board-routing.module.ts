import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListsBoardComponent } from 'src/app/todolists-board/components/todo-lists-board/todo-lists-board.component';

const routes: Routes = [{ path: '', component: TodoListsBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListsBoardRoutingModule {}
