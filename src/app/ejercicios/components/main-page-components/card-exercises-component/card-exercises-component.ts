import {  Component } from '@angular/core';
import { RouterLink} from "@angular/router";

@Component({
  selector: 'card-exercises-component',
  imports: [RouterLink],
  templateUrl: './card-exercises-component.html',

})
export class CardExercisesComponent {

    Pages = [
    {
      title: 'Arrays',
      link: '/Main/array',
      img: '/img/arrays.webp'
    },
    {
      title: 'Functions',
      link: '/Main/function',
      img: '/img/funciones.png'
    },

    {
      title: 'Async/Await',
      link: '/Main/ansync-await',
      img: '/img/async.png'
    }
  ];

}
