import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListBoardComponent } from 'src/app/todolists-board/todo-list-board.component';

const routes: Routes = [{ path: '', component: TodoListBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListsBoardRoutingModule {}
