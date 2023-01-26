import { Component, Input } from '@angular/core';

import { Chat } from '../../../modules/core/models/chat.model';

@Component({
	selector: 'app-chat-preview',
	templateUrl: './chat-preview.component.html',
	styleUrls: ['./chat-preview.component.scss'],
})
export class ChatPreviewComponent {
	@Input()
	public chat!: Chat;

	public constructor() {}
}
