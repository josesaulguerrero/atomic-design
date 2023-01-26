import { Chat } from './chat.model';

export interface User {
	id: string;
	name: string;
	email: string;
	avatarUrl: string;
	chats: Chat[];
}
