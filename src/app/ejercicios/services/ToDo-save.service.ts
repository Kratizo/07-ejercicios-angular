
import {  Injectable, signal } from '@angular/core';
import { ToDo } from '../Interfaces/ToDo-interface';

@Injectable({providedIn: 'root'})
export class TodoService {

    toDoList = signal<ToDo[]>([
      {num: 1, task: 'Estudiar Angular', status: false, priority: 'media'},
      {num: 2, task: 'Ir a cagar', status: false, priority: 'media'},
      {num: 3, task: 'Hacer ejercicio', status: false, priority: 'media'},
    ]);

    selected = signal<number | null>(null);

    selectToDo(num: number){
      if(num === this.selected()) {
        this.selected.set(null);
      }else{
        this.selected.set(num);
      }
    }

    addToDo(task: string, priority: string){
      const newNum = this.toDoList().length > 0
          ? Math.max(...this.toDoList().map(t => t.num)) + 1 : 1;
          this.toDoList.update(prev => [...prev, {num: newNum, task: task, status: false, priority: priority}]);
    }

    deleteToDo(num: number){
      this.toDoList.update(prev => prev.filter(t => t.num !== num));
      if(this.selected() === num){
        this.selected.set(null);
      }
    }

    updateToDo(num: number, newTask: string, newPriority: string){
    this.toDoList.update(prev =>
    prev.map(todo =>
      todo.num === num
        ? { ...todo, task: newTask, priority: newPriority }
        : todo
    )
  );
}



    loadToDo(num: number){

      return this.toDoList().find(todo => todo.num === num) ?? null;
    }

}                                                                                          //**his.toDoList.map(t => t.num))(recorre el arreglo y almacena en t todo lo que este en la propiedad num) */
