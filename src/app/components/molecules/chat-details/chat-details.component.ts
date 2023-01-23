import { ChatDetails } from 'src/app/modules/core/models/chat.model';

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-chat-details',
	templateUrl: './chat-details.component.html',
	styleUrls: ['./chat-details.component.scss'],
})
export class ChatDetailsComponent {
	@Input('details')
	public chatDetails!: ChatDetails;

	constructor() {}
}
