import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { UserService } from 'src/app/services/backend/user.service';
import { User } from 'src/app/data/model/general';

import {
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';


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

  selector: 'create-user-component',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']

})
export class CreateUserConponent implements OnInit, OnChanges {

  constructor(
    private _formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private userService: UserService,
     
  ) {}
  ngOnInit(): void {
   
  }

  @Output() finishEvent = new EventEmitter<any>();
  @ViewChild('userForm', { read: NgForm }) form!: NgForm;
  user:  User = new User();
  list = true;
  color: any;
  @Input() userId!: number;


  firstName = new FormControl<string | null>(null, Validators.required);
  lastName = new FormControl<string | null>(null, Validators.required);
  address = new FormControl<string | null>(null, Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  role = new FormControl<string | null>(null, Validators.required);
  password = new FormControl('', Validators.required);
  id = new FormControl('', Validators.required);
  imgUrl = new FormControl(null, Validators.required);


  date = new FormControl(new Date());
  hide = true;
  serializedDate = new FormControl(new Date().toISOString());



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["tipeCaseId"] ){
      this.userService.get(changes["userId"].currentValue).subscribe({
        next:(value)=> {
          this.user = value.result
        },error:()=> {
          this.toasterService.showGenericErrorToast();
        },
      })
    }
  }

  save() {
    this.form.form.markAllAsTouched();
   //let puestoNuevo= new Puesto();
    this.userService.save(this.user).subscribe({
      next: () => {
        if(!this.user){
          this.toasterService.show({
            message: 'Usuario creado con exito',
            type: ToasterEnum.SUCCESS,
          });
        }else{
          this.toasterService.show({
            message: 'Cambios realizados con exito',
            type: ToasterEnum.SUCCESS,
          });
        }
        this.finish();
      },error:()=> {
        console.log("error")
        this.toasterService.showGenericErrorToast();
      },
    });
  }
  finish(){
    this.finishEvent.emit();
  }
}
