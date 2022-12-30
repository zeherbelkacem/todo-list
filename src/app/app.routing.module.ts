import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'todo', component: TodoComponent },
      { path: 'add-todo/:id', component: AddTodoComponent },
      { path: 'edit-todo/:id', component: EditTodoComponent },
      { path: '**', redirectTo: 'todo' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
