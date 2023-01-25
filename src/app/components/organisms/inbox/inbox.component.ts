import { ChatPreview } from 'src/app/modules/core/models/chat.model';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent {
	@Input()
	public chats: ChatPreview[] = [];

	@Output()
	public addContact: EventEmitter<boolean>;

	public searchBar = new FormControl('', { nonNullable: true });

	public get filteredChats(): ChatPreview[] {
		return this.chats.filter((chat) =>
			chat.title
				.toLocaleLowerCase()
				.includes(this.searchBar.value.toLocaleLowerCase()),
		);
	}

	public constructor() {
		this.addContact = new EventEmitter();
	}

	public onAddContact(): void {
		this.addContact.emit(true);
	}
}
