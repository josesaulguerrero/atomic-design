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
}

export interface ChatDetails {
	avatar: string;
	name: string;
	lastTimeOnline: Date;
}
