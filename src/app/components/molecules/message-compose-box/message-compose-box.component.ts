import { Message } from 'src/app/modules/core/models/message.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-message-compose-box',
	templateUrl: './message-compose-box.component.html',
	styleUrls: ['./message-compose-box.component.scss'],
})
export class MessageComposeBoxComponent {
	@Output()
	public messageSubmit: EventEmitter<Message>;

	@Input()
	public recipientId!: string;

	public readonly iconSize = 20;

	public readonly messageControl: FormControl;

	public constructor() {
		this.messageSubmit = new EventEmitter();
		this.messageControl = new FormControl('', {
			nonNullable: true,
			validators: [Validators.required],
		});
	}

	public onMessageSubmit(): void {
		if (
			this.messageControl.hasError('required') ||
			this.messageControl.value.trim() === ''
		)
			return;

		const message: Message = {
			content: this.messageControl.value,
			timestamp: new Date(),
			receiverId: this.recipientId,
		};

		this.messageSubmit.emit(message);
	}
}
