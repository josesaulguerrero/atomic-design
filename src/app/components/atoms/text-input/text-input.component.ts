import { Component, Input } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

import { AtomicInput } from '../models/input.model';

@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements AtomicInput<string> {
	@Input()
	public placeholder: string;

	@Input()
	public required: boolean;

	@Input()
	public control: FormControl<string>;

	constructor(private readonly _formBuilder: NonNullableFormBuilder) {
		this.placeholder = '';
		this.required ??= false;

		const validators = [];
		this.required && validators.push(Validators.required);
		this.control ??= _formBuilder.control('', validators);
	}
}
