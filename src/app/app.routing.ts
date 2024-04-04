import { Routes } from '@angular/router';

import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AllowNavigationGuard } from './security/guards/allow-navigation-admin.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
          
        canActivate: [AllowNavigationGuard],
      },
      {
        path: '',
        loadChildren:
          () => import('./pages/pages.module').then(m => m.MaterialComponentsModule),
          
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        
       canActivate: [AllowNavigationGuard],
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];
