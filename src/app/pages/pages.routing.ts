import { Routes } from '@angular/router';

import { DevelopersComponent } from './developers/Developers.component';
import { CreateDeveloperComponent } from './createDeveloper/createDeveloper.component';

import { ProjectsListComponent } from './projectsList/projectsList.component';
import { CalendarComponent } from './calendar/calendar.component';
export const PagesRoutes: Routes = [
  {
    path: 'developers',
    component: DevelopersComponent
  },{
    path: 'createDeveloper',
    component:CreateDeveloperComponent
  },{
    path: 'projectList',
    component:ProjectsListComponent
  },{
    path: 'calendar',
    component:CalendarComponent
  },
  
];
