import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './core/components/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './core/components/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'events',
        loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
