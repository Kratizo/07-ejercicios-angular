import { TodoService } from '../../../services/ToDo-save.service';
import { UpdateComponent } from './../Modal-task/update-component/update-component';
import { Component, inject, signal } from '@angular/core';



@Component({
  selector: 'to-do-list-component',
  imports: [UpdateComponent],
  templateUrl: './to-do-list-component.html',
})


export default class ToDoListComponent {

    TodoService = inject(TodoService);




    Modalstate = signal(false);

    openModal(){
      this.Modalstate.set(true);
    }
}


