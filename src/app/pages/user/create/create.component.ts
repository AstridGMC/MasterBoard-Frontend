import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';

import {
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
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
    
  selector: 'create-developer',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
  
})
export class CreateUserConponent {
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
