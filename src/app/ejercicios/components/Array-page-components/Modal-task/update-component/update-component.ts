
import {Component, inject, input, output } from '@angular/core';
import { TodoService } from '../../../../services/ToDo-save.service';


@Component({
  selector: 'update-component',
  imports: [],
  templateUrl: './update-component.html',
})
export class UpdateComponent {

    todoService = inject(TodoService);

    open = input.required<boolean>();
    close = output();

    closeModal(){
      this.close.emit();
    }
}





