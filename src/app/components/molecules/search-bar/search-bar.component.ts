import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
	@Input()
	public barControl: FormControl<string>;

	public constructor() {
		this.barControl = new FormControl('', { nonNullable: true });
	}
}
