import { TodoService } from '../../../services/ToDo-save.service';
import { UpdateComponent } from './../Modal-task/update-component/update-component';
import { Component, inject, signal } from '@angular/core';
import { ToDoFilterComponent } from "../ToDo-filter-component/ToDo-filter-component";
import { FilterService } from '../../../services/ToDo-filter.service';



@Component({
  selector: 'to-do-list-component',
  imports: [UpdateComponent, ToDoFilterComponent],
  templateUrl: './to-do-list-component.html',
})


export default class ToDoListComponent {

    TodoService = inject(TodoService);
    filter = inject(FilterService)
    Modalstate = signal(false);

    openModal(){
      this.Modalstate.set(true);
    }
}


