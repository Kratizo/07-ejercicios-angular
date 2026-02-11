import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'Main',
    loadComponent: () =>
    import('./ejercicios/Pages/main-page/main-page'),
    children: [
    {
      path: '',
      loadComponent: () =>
      import('./ejercicios/components/main-page-components/scroll-menu-component/scroll-menu-component')
    },
    {
      path: 'array',
      loadComponent: () =>
      import('./ejercicios/Pages/Array-page/Array-page'),
      children: [
        {
          path: '',
          loadComponent: () =>
          import('./ejercicios/components/Array-page-components/to-do-list-component/to-do-list-component')
        },
      ],
    },
    {
      path: 'function',
      loadComponent: () =>
      import('./ejercicios/Pages/Fucntion-page/Fucntion-page')
    },

    {
      path: 'ansync-await',
      loadComponent: () =>
        import('./ejercicios/Pages/ansync-await-page/ansync-await-page')
    },

  ]
  },


  {
    path: '**',
    redirectTo: 'Main'
  }



];
