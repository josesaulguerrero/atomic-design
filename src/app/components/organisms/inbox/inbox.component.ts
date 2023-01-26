import { Chat } from 'src/app/modules/core/models/chat.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent {
	@Input()
	public chats: Chat[] = [];

	@Output()
	public addContact: EventEmitter<boolean>;

	@Output()
	public switchChat: EventEmitter<string>;

	public searchBar = new FormControl('', { nonNullable: true });

	public get filteredChats(): Chat[] {
		return this.chats.filter((chat) =>
			chat.details.name
				.toLocaleLowerCase()
				.includes(this.searchBar.value.toLocaleLowerCase()),
		);
	}

	public constructor() {
		this.addContact = new EventEmitter();
		this.switchChat = new EventEmitter();
	}

	public onAddContact(): void {
		this.addContact.emit(true);
	}

	public onSwitchChat(chatId: string): void {
		this.switchChat.emit(chatId);
	}
}
