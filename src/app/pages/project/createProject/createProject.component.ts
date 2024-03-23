import { MatExpansionModule } from '@angular/material/expansion';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {FormControl, FormsModule, ReactiveFormsModule,NgForm, Validators ,FormGroupDirective} from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Project } from 'src/app/data/model/general';
import { CiudadService } from 'src/app/services/backend/ciudad.service';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';



import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const MY_DATE_FORMAT = {
    parse: {
      dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
    },
    display: {
      dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    }
  };

  /** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

@Component({
    
  selector: 'create-project-form',
  templateUrl: './createProject.component.html',
  styleUrls: ['./createProject.component.scss'],
  providers:
  [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }],
  
})
export class CreateProjectComponent implements OnInit,OnChanges {

  constructor(
    private toasterService: ToasterService,
    private ciudadService: CiudadService
  ) {}

  project: Project = new Project();
  @Input() projectId! : number;
  @Output() finishEvent = new EventEmitter<any>();


  ngOnInit(): void {
    if(this.projectId){
      this.ciudadService.get(this.projectId).subscribe({
        next:(value)=> {
          this.projectId = value.result
        },error:()=> {
          this.toasterService.showGenericErrorToast();
        },
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["ciudadId"] ){
      this.ciudadService.get(changes["ciudadId"].currentValue).subscribe({
        next:(value)=> {
          this.project = value.result
        },error:()=> {
          this.toasterService.showGenericErrorToast();
        },
      })
    }
  }


    date = new FormControl(new Date());
    hide = true;
    serializedDate = new FormControl(new Date().toISOString());


    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}
