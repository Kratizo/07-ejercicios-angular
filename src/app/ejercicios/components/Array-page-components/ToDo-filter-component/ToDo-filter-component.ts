import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../../services/ToDo-save.service';
import type { ToDo } from '../../../Interfaces/ToDo-interface';
import { FilterService } from '../../../services/ToDo-filter.service';

@Component({
  selector: 'ToDo-filter-component',
  imports: [],
  templateUrl: './ToDo-filter-component.html'
})
export class ToDoFilterComponent {

  filter = inject(FilterService)

}
