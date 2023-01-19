import { ChatPreview } from 'src/app/modules/core/models/chat.model';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chats',
	templateUrl: './chats.component.html',
	styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
	public chats: ChatPreview[] = [];

	public constructor() {}

	public ngOnInit(): void {
		this.chats = [
			{
				title: 'Alicia Torreaux',
				avatar: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
				metadata: {
					lastMessageDate: new Date(),
					lastMessagePreview: 'How have you been?',
					receivedMessagesCount: 2,
				},
			},
			{
				title: 'Daniel Johnson',
				avatar:
					'https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2020/05/0.jpg?resize=500%2C500&ssl=1',
				metadata: {
					lastMessageDate: new Date(),
					lastMessagePreview: 'Work is done?',
					receivedMessagesCount: 1,
				},
			},
			{
				title: 'Carolina Ambers',
				avatar:
					'https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2022/10/lauren_headshot2022.png?resize=640%2C640&ssl=1',
				metadata: {
					lastMessageDate: new Date(),
					lastMessagePreview: "Don't forget to buy my favorite cake.",
					receivedMessagesCount: 4,
				},
			},
		];
	}
}
