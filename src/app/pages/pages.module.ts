import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutes} from './pages.routing';

import { MatPaginatorModule } from '@angular/material/paginator';
import { DevelopersComponent } from './developers/Developers.component';
import { CreateDeveloperComponent } from './createDeveloper/createDeveloper.component';
import { ProjectsListComponent } from './projectsList/projectsList.component';

import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';


//import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    
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
    ProjectsListComponent,
    CalendarModule,
  ],
  providers: [],
})
export class MaterialComponentsModule {}
