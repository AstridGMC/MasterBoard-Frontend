import { MatExpansionModule } from '@angular/material/expansion';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormControl, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, NgForm, Validators, FormGroupDirective } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Project, User, UserPManagerList } from 'src/app/data/model/general';
import { ProjectService } from 'src/app/services/backend/Project.service';
import { ToasterService } from 'src/app/services/others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';
import { Observable } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@Component({
	selector: 'projectDetail',
	templateUrl: './projectDetail.component.html',
	styleUrls: ['./projectDetail.component.scss']
})
export class ProjectDetailComponent {
	projectManager: User = {
		id: 1,
		firstName: 'marcos',
		lastName: 'Nagera',
		email: 'marcos_nagera@gmail.com',
		address: 'desc',
		phone: '33323233',
		imgUrl: 'ewewewe',
		role: 'developper',
		password: '000',
		salary_per_hour: 80.9
	}


	project: Project = {
		nombre: 'Proyecto Unitario',
		id: 1,
		projectManager: this.projectManager,
		descripcion: " ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem iure, nam doloribus magnam nesciunt illum obcaecati commodi praesentium quibusdam fugiat vel eum ipsam, eveniet soluta quis mollitia ratione perferend ",
		background_url: 'ddsda/dadada1',
		is_active: true,
		is_public: true,
		creacion_date: '12/02/2024',
		actualizacion_date: '12/02/2024'

	}
	@Input() projectId?: number;
	projectselect: Project = new Project();

	isLinear = false;
	firstFormGroup: FormGroup = Object.create(null);
	secondFormGroup: FormGroup = Object.create(null);

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

	constructor(
		private _formBuilder: FormBuilder,
		private projectService: ProjectService,
		private toasterService: ToasterService,
	) { }

	ngOnInit() {
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

		if (this.projectId) {
			this.projectService.get(this.projectId).subscribe({
				next: (value:any) => {
					this.projectselect = value.result
				}, error: () => {
					this.toasterService.showGenericErrorToast();
				},
			})
		}
	}
}