import { Message } from 'src/app/modules/core/models/message.model';

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
	@Input()
	public message!: Message;

	@Input()
	public incoming!: boolean;

	public constructor() {}
}
