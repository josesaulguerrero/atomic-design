import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-input-label',
	templateUrl: './input-label.component.html',
	styleUrls: ['./input-label.component.scss'],
})
export class InputLabelComponent {
	@Input()
	public forInputName: string = '';

	@Input()
	public label: string = 'Enter a value: ';

	public constructor() {}
}
