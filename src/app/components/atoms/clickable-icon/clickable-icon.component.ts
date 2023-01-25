import { Component, EventEmitter, Output } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
	selector: 'app-clickable-icon',
	templateUrl: './clickable-icon.component.html',
	styleUrls: ['./clickable-icon.component.scss'],
})
export class ClickableIconComponent extends IconComponent {
	@Output()
	public userClick: EventEmitter<MouseEvent>;

	public constructor() {
		super();
		this.userClick = new EventEmitter<MouseEvent>();
	}

	public handleClickEvent(event: MouseEvent): void {
		this.userClick.emit(event);
	}
}
