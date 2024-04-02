import { Component, EventEmitter, Output,ViewChild ,SimpleChanges, Input,OnInit, OnChanges} from '@angular/core';
import { CaseType } from 'src/app/data/model/general';
import { FormBuilder, FormControl,FormGroup, NgForm, Validators, FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { TypeCaseService } from 'src/app/services/backend/typeCase.service';
import { ToasterEnum } from 'src/global/toaster-enum';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {StepTypeCaseComponent} from '../../../material-component/stepTypeCase/stepTypeCase.component'



@Component({
  selector: 'create-type-case',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})

export class CreateTypeCaseComponent implements OnInit,OnChanges {

  constructor(
    private _formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private typeCaseService: TypeCaseService,
     
  ) {}


  @Output() finishEvent = new EventEmitter<any>();
  @ViewChild('puestoForm', { read: NgForm }) form!: NgForm;
  caseType: CaseType = new CaseType();
  list = true;
  color:any;
  @Input() caseTypeId!: number;

  nameFC = new FormControl<string | null>(null, Validators.required);
  descriptionFC = new FormControl<string | null>(null, Validators.required);
  colorFC = new FormControl('', Validators.required);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  ngOnInit(): void {
 

    this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});

		// varient
		this.varientfirstFormGroup = this._formBuilder.group({
			varientfirstCtrl: ['', Validators.required]
		});
		this.varientsecondFormGroup = this._formBuilder.group({
			varientsecondCtrl: ['', Validators.required]
		});

		// position
		this.positionfirstFormGroup = this._formBuilder.group({
			positionfirstCtrl: ['', Validators.required]
		});
		this.positionsecondFormGroup = this._formBuilder.group({
			positionsecondCtrl: ['', Validators.required]
		});

		// optional
		this.optionalfirstFormGroup = this._formBuilder.group({
			optionalfirstCtrl: ['', Validators.required]
		});
		this.optionalsecondFormGroup = this._formBuilder.group({
			optionalsecondCtrl: ['', Validators.required]
		});

		// editable
		this.editablefirstFormGroup = this._formBuilder.group({
			editablefirstCtrl: ['', Validators.required]
		});
		this.editablesecondFormGroup = this._formBuilder.group({
			editablesecondCtrl: ['', Validators.required]
		});

		// customize
		this.customizefirstFormGroup = this._formBuilder.group({
			customizefirstCtrl: ['', Validators.required]
		});
		this.customizesecondFormGroup = this._formBuilder.group({
			customizesecondCtrl: ['', Validators.required]
		});

		// error
		this.errorfirstFormGroup = this._formBuilder.group({
			errorfirstCtrl: ['', Validators.required]
		});
		this.errorsecondFormGroup = this._formBuilder.group({
			errorsecondCtrl: ['', Validators.required]
		});
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["tipeCaseId"] ){
      this.typeCaseService.get(changes["typeCaseId"].currentValue).subscribe({
        next:(value)=> {
          this.caseType = value.result
        },error:()=> {
          this.toasterService.showGenericErrorToast();
        },
      })
    }
  }

  save() {
    this.form.form.markAllAsTouched();
   //let puestoNuevo= new Puesto();
    this.typeCaseService.save(this.caseType).subscribe({
      next: () => {
        if(!this.caseType){
          this.toasterService.show({
            message: 'Tipo de caso creado con exito',
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








	isLinearvarient = false;
	varientfirstFormGroup: FormGroup = Object.create(null);
	varientsecondFormGroup: FormGroup = Object.create(null);

	isLinearposition = false;
	positionfirstFormGroup: FormGroup = Object.create(null);
	positionsecondFormGroup: FormGroup = Object.create(null);


	optionalfirstFormGroup: FormGroup = Object.create(null);
	optionalsecondFormGroup: FormGroup = Object.create(null);
	isOptional = false;

	editablefirstFormGroup: FormGroup = Object.create(null);
	editablesecondFormGroup: FormGroup = Object.create(null);
	isEditable = false;

	customizefirstFormGroup: FormGroup = Object.create(null);
	customizesecondFormGroup: FormGroup = Object.create(null);

	errorfirstFormGroup: FormGroup = Object.create(null);
	errorsecondFormGroup: FormGroup = Object.create(null);
}