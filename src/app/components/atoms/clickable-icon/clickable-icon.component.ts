import { Component, EventEmitter, Output } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
	selector: 'app-clickable-icon',
	templateUrl: './clickable-icon.component.html',
	styleUrls: ['./clickable-icon.component.scss'],
})
export class ClickableIconComponent extends IconComponent {
	@Output()
	public click: EventEmitter<MouseEvent>;

	public constructor() {
		super();
		this.click = new EventEmitter<MouseEvent>();
	}

	public handleClickEvent(event: MouseEvent): void {
		this.click.emit(event);
	}
}
