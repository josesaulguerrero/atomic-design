import { Message } from './message.model';

export interface ChatMetadata {
	lastMessagePreview: string;
	lastMessageDate: Date;
	receivedMessagesCount: number;
}

export interface ChatPreview {
	avatar: string;
	title: string;
	metadata: ChatMetadata;
}

export interface Chat {
	details: ChatDetails;
	messages: Message[];
}

export interface ChatDetails {
	userId: string;
	avatar: string;
	name: string;
	lastTimeOnline: Date;
}
