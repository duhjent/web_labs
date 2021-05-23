import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './core/components/full-layout/full-layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SimpleLayoutComponent } from './core/components/simple-layout/simple-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { LoginPage } from './core/pages/login/login.page';
import { LogoutPage } from './core/pages/logout/logout.page';
import { RegisterPage } from './core/pages/register/register.page';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
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
    canActivate: [NoAuthGuard],
    children: [
      {
        path: '',
        component: LoginPage,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'logout',
    component: SimpleLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LogoutPage,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'register',
    component: SimpleLayoutComponent,
    canActivate: [NoAuthGuard],
    children: [
      {
        path: '',
        component: RegisterPage,
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
