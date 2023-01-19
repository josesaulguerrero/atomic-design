import { Component, Input } from '@angular/core';

import { ChatPreview } from '../../../modules/core/models/chat.model';

@Component({
	selector: 'app-chat-preview',
	templateUrl: './chat-preview.component.html',
	styleUrls: ['./chat-preview.component.scss'],
})
export class ChatPreviewComponent {
	@Input()
	public chat!: ChatPreview;

	public constructor() {}
}
