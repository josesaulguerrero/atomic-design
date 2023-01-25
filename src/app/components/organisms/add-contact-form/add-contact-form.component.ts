import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-add-contact-form',
	templateUrl: './add-contact-form.component.html',
	styleUrls: ['./add-contact-form.component.scss'],
})
export class AddContactFormComponent {
	public contactGroup: FormGroup;

	public get emailControl(): FormControl<string> {
		return this.contactGroup.get('email') as FormControl<string>;
	}

	public constructor(public readonly modal: NgbActiveModal) {
		this.contactGroup = new FormGroup({
			email: new FormControl('', {
				nonNullable: true,
				validators: [Validators.required, Validators.email],
			}),
		});
	}
}
