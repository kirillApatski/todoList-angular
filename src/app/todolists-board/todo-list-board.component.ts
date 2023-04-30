import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todolists-board/services/todos.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/todolists-board/models/todos.model';

@Component({
  selector: 'todo-todo-lists-board',
  templateUrl: './todo-lists-board.component.html',
  styleUrls: ['./todo-lists-board.component.scss'],
})
export class TodoListBoardComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  constructor(private todosService: TodosService) {}
  titleTodo: string = '';

  ngOnInit() {
    this.todos$ = this.todosService.todos$;
    this.todosService.getTodos();
  }
  createTodoHandler() {
    this.todosService.createTodo(this.titleTodo);
  }
}
