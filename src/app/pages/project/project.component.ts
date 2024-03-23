import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {MatTableModule} from '@angular/material/table';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from 'src/app/data/model/general';
import { needConfirmation } from 'src/app/decorators/confirm-dialog.decorator';
import { CiudadService } from 'src/app/services/backend/ciudad.service';
import { DialogService } from 'src/app/services/others/dialog.service';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { PermissionTypeEnum } from 'src/global/permissions';
import { ToasterEnum } from 'src/global/toaster-enum';


import {NgFor} from "@angular/common";
//import { Project } from '@stackblitz/sdk';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'developers-page',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
    tabs = 0;
    displayedColumns: string[] = [
      'index',
      'name',
      'department',
      'description',
      'actions',
    ];
    datos: Project[] = [];
    @ViewChild('paginator') paginator!: MatPaginator;
  
    dataSource = new MatTableDataSource<Project>(this.datos);
  
    list = true;
    selectedId!:number
  
    permissionTypes = PermissionTypeEnum
  
    constructor(
      private ciudadService: CiudadService,
      private toasterService: ToasterService,
      private confirmationDialogService: DialogService,
    ) {}
  
    changeTab(num: number) {
      this.tabs = num;
      this.list = true;
    }
  
    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
    }
  
    ngOnInit(): void {
      this.getAll();
    }
  
    getAll() {
      this.ciudadService.listAllHttp({}).subscribe({
        next: (value) => {
          this.datos = value.body.result;
          this.dataSource = new MatTableDataSource<Project>(this.datos);
          this.dataSource.paginator = this.paginator;
        },
        error: () => {
          this.toasterService.showGenericErrorToast();
        },
      });
    }
  
    edit(id:number){
      this.selectedId = id;
      this.list = false;
    }
  
    setListView(){
      this.getAll();
      this.tabs = 0;
      this.list = true;
    }
  
    @needConfirmation()
    deleteCiudad(id:any){
      if(id){
        this.ciudadService.delete(id).subscribe({
          next: () => {
            this.toasterService.show({message:'Ciudad eliminada',type:ToasterEnum.SUCCESS})
            this.getAll();
          },
        
          error: () => {
            this.toasterService.showGenericErrorToast();
          },
        })
      }
    }
}