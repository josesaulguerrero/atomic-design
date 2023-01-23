import { Chat } from 'src/app/modules/core/models/chat.model';
import { Message } from 'src/app/modules/core/models/message.model';

import {
    AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild
} from '@angular/core';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements AfterViewInit {
	@Output()
	public messageSubmit: EventEmitter<Message>;

	@Input()
	public chat!: Chat;

	@Input()
	public localUserId!: string;

	@ViewChild('messagesList')
	public messagesList!: ElementRef<HTMLElement>;

	public constructor() {
		this.messageSubmit = new EventEmitter();
	}

	public ngAfterViewInit(): void {
		this.scrollToBottom();
	}

	public onMessageSubmit = (message: Message) => {
		this.messageSubmit.emit(message);
	};

	private scrollToBottom = () =>
		this.messagesList.nativeElement.scrollTo({
			top: this.messagesList.nativeElement.scrollHeight,
		});
}
