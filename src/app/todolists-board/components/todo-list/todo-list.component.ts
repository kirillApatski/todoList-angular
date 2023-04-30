import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todolists-board/models/todos.model';

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() titleTodo!: string;
  @Output() deleteTodo = new EventEmitter<string>();
  titleTask: string = '';
  constructor() {}

  ngOnInit() {}

  deleteTodoHandler(todoId: string) {
    this.deleteTodo.emit(todoId);
  }
}
