import { MatExpansionModule } from '@angular/material/expansion';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormControl, FormsModule, ReactiveFormsModule, NgForm, Validators, FormGroupDirective } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Project,UserPManagerList } from 'src/app/data/model/general';
import { ProjectService } from 'src/app/services/backend/Project.service';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';
import {Observable} from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

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

  selector: 'create-project',
  templateUrl: 'createProject.component.html',
  styleUrls: ['createProject.component.scss']
})
export class CreateProjectComponent implements OnInit, OnChanges {

  constructor(
    private toasterService: ToasterService,
    private projectService: ProjectService
  ) { }

  project: Project = new Project();
  @Input() projectId?: number;
  @Output() finishEvent = new EventEmitter<any>();
  myControl = new FormControl<string | any>('');
  filteredOptions?: Observable<any[]>;
  date = new FormControl(new Date());
  hide = true;
  serializedDate = new FormControl(new Date().toISOString());
  email = new FormControl('', [Validators.required, Validators.email]);


  userList: any[] = [
    {id:1, email: 'Mary@email.com', nombres:'mary', apellidos:'garcia', rol:'projectManager'}, 
    {id:1, email: 'Shelly@email.com', nombres:'Shelly', apellidos:'Orozco', rol:'projectManager'}, 
    {id:1, email: 'Carlos@email.com', nombres:'Carlos', apellidos:'Perez', rol:'projectManager'}, ];

  ngOnInit(): void {
   

    //filtrado de datos
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.email;
        return name ? this._filter(name as string) : this.userList.slice();
      }),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["projectId"]) {
      this.projectService.get(changes["projectId"].currentValue).subscribe({
        next: (value) => {
          this.project = value.result
        }, error: () => {
          this.toasterService.showGenericErrorToast();
        },
      })
    }
  }
  getAll() {
    this.projectService.listAllHttp({}).subscribe({
      next: (value) => {
        this.userList = value.body.result;
      },
      error: () => {
        this.toasterService.showGenericErrorToast();
      },
    });
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  displayFn(user: UserPManagerList): string {
    return user && user.email ? user.email : '';
  }

  private _filter(name: string): UserPManagerList[] {
    const filterValue = name.toLowerCase();

    return this.userList.filter(option => option.email.toLowerCase().includes(filterValue));
  }
}
