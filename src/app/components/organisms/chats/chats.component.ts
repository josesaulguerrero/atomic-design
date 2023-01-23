import { ChatPreview } from 'src/app/modules/core/models/chat.model';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-chats',
	templateUrl: './chats.component.html',
	styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
	public searchBar = new FormControl('', { nonNullable: true });

	public _chats: ChatPreview[] = [];

	public get chats(): ChatPreview[] {
		return this._chats.filter((chat) =>
			chat.title
				.toLocaleLowerCase()
				.includes(this.searchBar.value.toLocaleLowerCase()),
		);
	}

	public constructor() {}

	public ngOnInit(): void {
		this._chats = [
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
			{
				title: 'Joseph Tyler',
				avatar: 'https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg',
				metadata: {
					lastMessageDate: new Date(),
					lastMessagePreview: 'How is mom doing?',
					receivedMessagesCount: 2,
				},
			},
			{
				title: 'Tanya Towers',
				avatar:
					'https://im.vsco.co/aws-us-west-2/87a614/5015405/5cf87a7ebf7e2e3d24b10d50/vsco5cf87a8138f78.jpg?w=412&dpr=2.625',
				metadata: {
					lastMessageDate: new Date(),
					lastMessagePreview: 'I know, right?!',
					receivedMessagesCount: 5,
				},
			},
		];
	}
}
