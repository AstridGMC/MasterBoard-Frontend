import { Routes } from '@angular/router';

import { AllowNavigationGuard } from '../security/guards/allow-navigation-admin.guard';

import { ProjectsListComponent } from './project/projectsList/projectsList.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectComponent } from './project/project.component';
import { TypeCaseComponent } from './typeCase/typeCase.component';
import { UserComponent } from './user/user.component';
export const PagesRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
   canActivate: [AllowNavigationGuard]
  },{
    path: 'projectList',
    component:ProjectsListComponent,
   canActivate: [AllowNavigationGuard],
  },{
    path: 'calendar',
    component:CalendarComponent,
    canActivate: [AllowNavigationGuard],
  },{
    path: 'projects',
    component:ProjectComponent,
    canActivate: [AllowNavigationGuard],
  },{
    path: 'typeCases',
    component:TypeCaseComponent,
     canActivate: [AllowNavigationGuard],
  },
  
];
