import { Chat } from 'src/app/modules/core/models/chat.model';
import { Message } from 'src/app/modules/core/models/message.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
	@Output()
	public messageSubmit: EventEmitter<Message>;

	@Input()
	public chat!: Chat;

	@Input()
	public localUserId!: string;

	public constructor() {
		this.messageSubmit = new EventEmitter();
	}

	public onMessageSubmit = (message: Message) =>
		this.messageSubmit.emit(message);
}
