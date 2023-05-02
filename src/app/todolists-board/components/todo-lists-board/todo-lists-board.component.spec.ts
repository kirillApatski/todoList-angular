import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListsBoardComponent } from 'src/app/todolists-board/components/todo-lists-board/todo-lists-board.component';

describe('TodolistBoardComponent', () => {
  let component: TodoListsBoardComponent;
  let fixture: ComponentFixture<TodoListsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListsBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
