import { Message } from './message.model';

export interface Chat {
	id: string;
	details: ChatDetails;
	messages: Message[];
	metadata: ChatMetadata;
}

export interface ChatMetadata {
	lastMessagePreview: string | null;
	lastMessageDate: Date | null;
}

export interface ChatDetails {
	userId: string;
	avatar: string;
	name: string;
}
