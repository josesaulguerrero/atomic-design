import { from, Observable, tap, zip } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { Injectable } from '@angular/core';
import { collection, CollectionReference, Firestore } from '@angular/fire/firestore';

import { Chat } from '../models/chat.model';
import { Message } from '../models/message.model';
import { User } from '../models/user.model';
import { UserService } from './users.service';

@Injectable({
	providedIn: 'root',
})
export class ChatsService {
	private readonly _chatsCollection: CollectionReference;

	public constructor(
		private readonly _firestore: Firestore,
		private readonly _userService: UserService,
	) {
		this._chatsCollection = collection(this._firestore, 'chats');
	}

	public createChatWith(remoteUserEmail: string): void {
		const localUser = this._userService.user;
		from(this._userService.findUserByEmail(remoteUserEmail))
			.pipe(
				tap((remoteUser) => {
					const localUserChat: Chat = this.buildChatWithUser(remoteUser!);
					const remoteUserChat: Chat = this.buildChatWithUser(localUser!);
					localUser?.chats.unshift(localUserChat);
					remoteUser?.chats.unshift(remoteUserChat);

					this._userService.saveChanges(remoteUser!);
					this._userService.saveChanges(localUser!);
				}),
				tap(console.log),
			)
			.subscribe();
	}

	private buildChatWithUser(user: User): Chat {
		return {
			id: uuid(),
			details: {
				avatar: user.avatarUrl!,
				name: user.name!,
				userId: user.id!,
			},
			metadata: {
				lastMessageDate: null,
				lastMessagePreview: null,
			},
			messages: [],
		};
	}

	public findChat(chatId: string): Observable<Chat> {
		return null!;
	}

	public sendMessage(message: Message) {
		const localUserObs = from(this._userService.syncedUser());
		const remoteUserObs = from(
			this._userService.findUserById(message.receiverId),
		);

		zip(localUserObs, remoteUserObs)
			.pipe(
				tap(([localUser, remoteUser]) => {
					const localUserChat = localUser!.chats
						.filter((chat) => chat.details.userId === remoteUser?.id)
						.at(0);
					const remoteUserChat = remoteUser?.chats
						.filter((chat) => chat.details.userId === localUser?.id)
						.at(0);

					localUserChat?.messages.unshift(message);
					remoteUserChat?.messages.unshift(message);

					this._userService.saveChanges(remoteUser!);
					this._userService.saveChanges(localUser!);
				}),
			)
			.subscribe();
	}
}
