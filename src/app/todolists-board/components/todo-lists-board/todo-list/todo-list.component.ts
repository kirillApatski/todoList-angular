import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todolists-board/models/todos.model';

@Component({
  selector: 'todo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() removeTodoEvent = new EventEmitter<string>();
  @Output() editTodoTitleEvent = new EventEmitter<{ todoId: string; titleTodo: string }>();
  isEditMode: boolean = false;
  titleTask: string = '';
  editTodoTitle: string = '';
  constructor() {}

  ngOnInit() {}

  removeTodoHandler() {
    this.removeTodoEvent.emit(this.todo.id);
  }
  activateEditMode() {
    this.editTodoTitle = this.todo.title;
    this.isEditMode = true;
  }
  editTitleHandler() {
    this.isEditMode = false;
    this.editTodoTitleEvent.emit({ todoId: this.todo.id, titleTodo: this.editTodoTitle });
  }
}
