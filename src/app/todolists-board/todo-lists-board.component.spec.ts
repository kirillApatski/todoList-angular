import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListBoardComponent } from 'src/app/todolists-board/todo-list-board.component';

describe('TodolistBoardComponent', () => {
  let component: TodoListBoardComponent;
  let fixture: ComponentFixture<TodoListBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
