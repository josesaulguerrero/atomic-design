import { ChatDetails } from 'src/app/modules/core/models/chat.model';

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-chat-header',
	templateUrl: './chat-header.component.html',
	styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent {
	@Input()
	public chatDetails!: ChatDetails;

	constructor() {}
}
