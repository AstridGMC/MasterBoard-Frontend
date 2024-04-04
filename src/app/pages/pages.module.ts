import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CheckPermissionDirective } from '../directives/check-permission.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AsyncPipe } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';

import { MatCardModule } from '@angular/material/card';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutes } from './pages.routing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DevelopersComponent } from './developers/Developers.component';

//PROJECTS
import { ProjectsListComponent } from './project/projectsList/projectsList.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './project/createProject/createProject.component';
import { ProjectDetailComponent } from './project/projectDetail/projectDetail.component';

//TYPE CASE
import { TypeCaseComponent } from './typeCase/typeCase.component';
import { CreateTypeCaseComponent } from './typeCase/create/create.component';
import {StepTypeCaseComponent} from '../material-component/stepTypeCase/stepTypeCase.component'

//CALENDAR
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';

//USERS
import { UserComponent } from './user/user.component';
import { CreateUserConponent } from './user/create/create.component';


//import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [

    CheckPermissionDirective,

    ProjectsListComponent,
    ProjectDetailComponent,

    ProjectComponent,
    CreateProjectComponent,

    TypeCaseComponent,
    CreateTypeCaseComponent,

    UserComponent,
    CreateUserConponent,
  ],
  imports: [
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    StepTypeCaseComponent,
    MatAutocompleteModule,
    ColorPickerModule,
    MatDialogModule,
    AsyncPipe,
    CommonModule,
    NgbModalModule,
    MatCardModule,
    RouterModule.forChild(PagesRoutes),
    HttpClientModule,
    
    FormsModule,
    // FlatpickrModule.forRoot(),
    ReactiveFormsModule,
    CdkTableModule,
    DevelopersComponent,
    MatPaginatorModule,
    CalendarModule,
    TablerIconsModule.pick(TablerIcons),
    MatInputModule,
    MatFormFieldModule,DemoMaterialModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    CheckPermissionDirective,DemoMaterialModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
})
export class MaterialComponentsModule { }
