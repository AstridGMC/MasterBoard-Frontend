import { Routes } from '@angular/router';

import { DevelopersComponent } from './developers/Developers.component';
import { CreateDeveloperComponent } from './createDeveloper/createDeveloper.component';

import { ProjectsListComponent } from './project/projectsList/projectsList.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectComponent } from './project/project.component';
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
  },{
    path: 'project',
    component:ProjectComponent
  },
  
];
