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
