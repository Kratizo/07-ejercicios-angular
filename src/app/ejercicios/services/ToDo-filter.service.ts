import { ToDo } from './../Interfaces/ToDo-interface';
import { Injectable, inject, signal } from '@angular/core';
import { TodoService } from './ToDo-save.service';

@Injectable({providedIn: 'root'})
export class FilterService {

    filters = {
    all: (todos: any[]) => todos,
    completed: (todos: any[]) => todos.filter(t => t.status),
    pending: (todos: any[]) => todos.filter(t => !t.status)
  };

  TodoService = inject(TodoService)

  currentFilter = signal<(todos: ToDo[]) => ToDo[]>(this.filters.all);

  getFilteredList() {
    return this.currentFilter()(this.TodoService.toDoList());
  }

  showAll() {
    this.currentFilter.set(this.filters.all);
  }

  showCompleted() {
    this.currentFilter.set(this.filters.completed);
  }

  showPending() {
    this.currentFilter.set(this.filters.pending);
  }

}
