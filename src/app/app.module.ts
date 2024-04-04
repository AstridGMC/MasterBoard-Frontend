
import { BrowserModule } from '@angular/platform-browser';
import { ToasterComponent } from './commos/toaster/toaster.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'


import { HTTP_INTERCEPTORS } from '@angular/common/http';

//Import Layouts
import { BlankComponent } from './layouts/blank/blank.component';

import { AuthInterceptor } from './security/interceptors/auth-interceptor';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import{CheckPermissionDirective} from'./directives/check-permission.directive';
import {FormControl,  ReactiveFormsModule} from '@angular/forms';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
//import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';


import { MatStepperModule } from '@angular/material/stepper';
import * as moment from 'moment';


export function momentAdapterFactory() {
  return adapterFactory(moment);
};
//import { CalendarModule, DateAdapter, adapterFactory  } from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    ToasterComponent,
    BlankComponent
  ],
  imports: [
    
    MatStepperModule,
    DemoMaterialModule, FormsModule, ReactiveFormsModule,
    CommonModule,
    NgbModalModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule,
    //FlatpickrModule,
    AppSidebarComponent,
    //CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
