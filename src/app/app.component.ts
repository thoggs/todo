import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title = 'Minhas tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.load();
  }

  add(): void {
    const title = this.form.controls.title.value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  markAsRemove(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1){
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo): void {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo): void {
    todo.done = false;
    this.save();
  }

  clear(): void {
    this.form.reset();
  }

  save(): void {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  load(): void {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    }else {
      this.todos = [];
    }
  }
}
