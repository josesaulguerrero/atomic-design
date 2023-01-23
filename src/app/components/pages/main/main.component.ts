import { Chat } from 'src/app/modules/core/models/chat.model';
import { Message } from 'src/app/modules/core/models/message.model';
import { v4 as uuid } from 'uuid';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	public localUserId = uuid();
	public recipientId = uuid();

	public chat: Chat = {
		details: {
			userId: this.recipientId,
			avatar: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
			lastTimeOnline: new Date(),
			name: 'Alicia Torreaux',
		},
		messages: this.buildMessageList(10),
	};

	constructor() {}

	ngOnInit(): void {}

	private buildMessageList(length: number): Message[] {
		return Array.from(
			{ length },
			(): Message => ({
				content:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda officiis voluptatum sed illum dolores recusandae exercitationem neque ullam labore facere! Laudantium vitae repellat laborum consequatur non corrupti molestias itaque minima.',
				receiverId: [this.localUserId, this.recipientId][
					Math.floor(Math.random() * 2)
				],
				timestamp: new Date(),
			}),
		);
	}
}
