import { from, switchMap } from 'rxjs';
import { Chat } from 'src/app/modules/core/models/chat.model';
import { Message } from 'src/app/modules/core/models/message.model';
import { UserService } from 'src/app/modules/core/services/users.service';
import { v4 as uuid } from 'uuid';

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
    AddContactFormComponent
} from '../../organisms/add-contact-form/add-contact-form.component';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent {
	public localUserId = uuid();
	public recipientId = uuid();

	public chat: Chat = {
		details: {
			userId: this.recipientId,
			avatar: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
			lastTimeOnline: new Date(),
			name: 'Alicia Torreaux',
		},
		messages: [],
	};

	public constructor(
		private readonly _userService: UserService,
		private readonly _modal: NgbModal,
	) {}

	public onAddContact(): void {
		from(this._modal.open(AddContactFormComponent, {}).result)
			.pipe(switchMap((email) => this._userService.userWithEmailExists(email)))
			.subscribe({
				next: (exists) => {
					// if(!exists)
				},
			});
	}

	public onMessageSubmit(message: Message): void {
		this.chat.messages.push(message);
	}
}
