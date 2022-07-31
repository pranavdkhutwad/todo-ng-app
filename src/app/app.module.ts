import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/components/todo-form/todo-form.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
  ], // Components, Pipe, Directives.
  imports: [BrowserModule, NgbModule, FormsModule], // Modules
  providers: [], // Services
  bootstrap: [AppComponent], // AppComponent (Root)
})
export class AppModule {}
