import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './core/components/full-layout/full-layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SimpleLayoutComponent } from './core/components/simple-layout/simple-layout.component';
import { LoginPage } from './modules/users/pages/login/login.page';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full'
      },
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
    path: 'login',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        component: LoginPage,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        component: PageNotFoundComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
