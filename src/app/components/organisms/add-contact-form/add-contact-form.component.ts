import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-add-contact-form',
	templateUrl: './add-contact-form.component.html',
	styleUrls: ['./add-contact-form.component.scss'],
})
export class AddContactFormComponent implements OnInit {
	public constructor(public readonly modal: NgbActiveModal) {}

	ngOnInit(): void {}
}
