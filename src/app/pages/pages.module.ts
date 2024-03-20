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


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    DevelopersComponent,
    CreateDeveloperComponent,
    MatPaginatorModule,
    ProjectsListComponent,
  ],
  providers: [],
})
export class MaterialComponentsModule {}
