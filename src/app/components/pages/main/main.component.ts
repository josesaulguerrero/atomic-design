import { from, switchMap } from 'rxjs';
import { Chat } from 'src/app/modules/core/models/chat.model';
import { Message } from 'src/app/modules/core/models/message.model';
import { ChatsService } from 'src/app/modules/core/services/chats.service';
import { UserService } from 'src/app/modules/core/services/users.service';
import { v4 as uuid } from 'uuid';

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
    AddContactFormComponent
} from '../../organisms/add-contact-form/add-contact-form.component';
import { PopupService } from '../../organisms/services/sweet-alert.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	public localUserId: string = '';

	public chats: Chat[] = [];

	public constructor(
		private readonly _userService: UserService,
		private readonly _chatsService: ChatsService,
		private readonly _modal: NgbModal,
		private readonly _swal: PopupService,
	) {}

	public ngOnInit(): void {
		this._userService
			.findUserByEmailAndListenToChanges(this._userService.user.email)
			.subscribe((user) => {
				this.localUserId = user?.id!;
				this.chats = user!.chats;
			});
	}

	public onAddContact(): void {
		from(this._modal.open(AddContactFormComponent).result)
			.pipe(
				switchMap((email) => {
					return this._userService.findUserByEmail(email);
				}),
			)
			.subscribe((user) => {
				if (!user) return this.openErrorPopup();
				this._chatsService.createChatWith(user.email);
			});
	}

	private openErrorPopup(): void {
		this._swal.openRequestPopup({
			title: 'Error saving contact',
			text: 'The user with the given Email could not be found.',
			showCloseButton: true,
			timer: 3000,
			timerProgressBar: true,
		});
	}

	public onMessageSubmit(message: Message): void {
		this._chatsService.sendMessage(message);
	}

	public onSwitchChat(chatId: string): void {
		this._chatsService.findChat(chatId);
	}
}
