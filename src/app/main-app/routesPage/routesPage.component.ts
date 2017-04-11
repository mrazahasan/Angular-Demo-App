import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap/modal';

/************* add classes which are in other file *********************/
import { AllRoutes } from './../../classes';


/************ custom validator function for form value validation ********/
export function maxValue(max: Number): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		var isValid:any;
		const input = control.value;
		//debugger;
		if(input != null)
			isValid = input.toString().length > max;
		else
			isValid = null;
		
		if (isValid)
			return { 'maxValue': { max } }
		else
			return null;
	};
}

/******** define some values so that i can see them in atble  ***********/
var allRoutes: AllRoutes[] = [
	{ Code: "00121", Description: 'Canal Park', RouteInventory: "Yes", JourneyPlan: "Monday", Status: "Active" },
	{ Code: "00122", Description: 'Main Road', RouteInventory: "Yes", JourneyPlan: "Monday - Friday", Status: "Active" }
];

/****** must be at the top of page class *************************/
@Component({
	selector: 'app-routesPage',
	templateUrl: './routesPage.component.html',
	styleUrls: ['./routesPage.component.css']
})

/******* Page class ***************************************************/
export class RoutesPageComponent {
	
	// Declearing child modal
	@ViewChild('lgModal') public childModal: ModalDirective;

	// Declear Form modal using FormBuilder class
	constructor(public fb: FormBuilder ) {
		this.formModal = fb.group({
			Code: [null, Validators.compose([Validators.required, Validators.minLength(5), maxValue(5)])],
			Description: [null, Validators.required],
			RouteInventory: [null, Validators.required],
			JourneyPlan: [null, Validators.required],
			Status: [null, Validators.required]
		});
	}
	private formModal: FormGroup;
	//show model using this function
	private showChildModal(): void {
		this.childModal.show();
		//this.RouteListForm = this.formModal;
	}
	// hide model when close button pressed on modal
	private hideModal(): void {
		this.childModal.hide();
	}
	// save data and close modal when ADD button press on modal
	private saveDataHide(): void {
		this.routeList.push(this.formModal.value);
		this.childModal.hide();
	}

	// Creating Temp variable to hold data in the html table
	private routeList = allRoutes;
}


