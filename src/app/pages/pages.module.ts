import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CheckPermissionDirective } from '../directives/check-permission.directive';



import { MatCardModule } from '@angular/material/card';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutes} from './pages.routing';

import { MatPaginatorModule } from '@angular/material/paginator';
import { DevelopersComponent } from './developers/Developers.component';
import { CreateDeveloperComponent } from './createDeveloper/createDeveloper.component';

//PROJECTS
import { ProjectsListComponent } from './project/projectsList/projectsList.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './project/createProject/createProject.component';



import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';


//import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    
    CheckPermissionDirective,

    ProjectsListComponent,
    ProjectComponent,
    CreateProjectComponent,
  ],
  imports: [

    CommonModule,
    NgbModalModule,
    MatCardModule,
    RouterModule.forChild(PagesRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
   // FlatpickrModule.forRoot(),
    ReactiveFormsModule,
    CdkTableModule,
    DevelopersComponent,
    CreateDeveloperComponent,
    MatPaginatorModule,
    CalendarModule,
    TablerIconsModule.pick(TablerIcons),
  ],
 exports:[

    CheckPermissionDirective
  ],
  providers: [],
})
export class MaterialComponentsModule {}
