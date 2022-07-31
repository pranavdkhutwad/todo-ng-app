import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  highPriorityLabel: string = 'High Priority List';
  mediumPriorityLabel: string = 'Medium Priority List';
  lowPriorityLabel: string = 'Low Priority List';
  id: number = 1;

  constructor() {}

  ngOnInit(): void {}

  getName() {
    return 'My Name';
  }
}
