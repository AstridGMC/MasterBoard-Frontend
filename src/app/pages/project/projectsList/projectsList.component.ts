import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {MatTableModule} from '@angular/material/table';
import {NgFor, NgForOf} from "@angular/common";
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from '../projectDetail/projectDetail.component';
export interface Card {
  id:number;
  title: string;
  progreso: number;
  subtitle: string;
  text: string;
}

const DATA: Card[] = [
  {
    id:1,
    title: 'Proyecto1',
    progreso:80,
    subtitle: 'Marcos Lopez',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:2,
    title: 'Proyecto 3',
    progreso:20,
    subtitle: 'Juana Martinez',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:3,
    title: 'Shiba Inu 3',
    progreso:40,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:4,
    title: 'Shiba Inu 4',
    progreso:60,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:5,
    title: 'Shiba Inu 5',
    progreso:20,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:6,
    title: 'Shiba Inu 6',
    progreso:10,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:7,
    title: 'Shiba Inu 7',
    progreso:50,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:8,
    title: 'Shiba Inu 8',
    progreso:80,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:9,
    title: 'Shiba Inu 9',
    progreso:80,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    id:10,
    title: 'Shiba Inu 10',
    progreso:80,
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  }
];

@Component({
  selector: 'projectList',
  templateUrl: './projectsList.component.html',
  styleUrls: ['./projectsList.component.scss']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  color = 'primary';
  mode:any = 'determinate';
  value = 50;
  selectedId!:number;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   obs?: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);

  constructor(private changeDetectorRef: ChangeDetectorRef, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProjectDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}