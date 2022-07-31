import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  task = {
    name: 'Angular',
    desc: 'Angular Concepts',
    priority: 1,
  };

  addTodo() {
    console.log('task ==>', this.task);
  }
}
