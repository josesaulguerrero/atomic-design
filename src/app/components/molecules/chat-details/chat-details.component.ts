import { Component, Input } from '@angular/core';

import { ChatDetails } from '../../../modules/core/models/chat.model';

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
