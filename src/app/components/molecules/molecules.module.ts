import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AtomsModule } from '../atoms/atoms.module';
import { ChatActionsComponent } from './chat-actions/chat-actions.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { MessageComposeBoxComponent } from './message-compose-box/message-compose-box.component';
import { MessageComponent } from './message/message.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
	declarations: [
		SearchBarComponent,
		ChatPreviewComponent,
		ChatDetailsComponent,
		ChatActionsComponent,
		ChatHeaderComponent,
		MessageComposeBoxComponent,
		MessageComponent,
	],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, AtomsModule],
	exports: [
		SearchBarComponent,
		ChatPreviewComponent,
		ChatDetailsComponent,
		ChatActionsComponent,
		ChatHeaderComponent,
		MessageComposeBoxComponent,
		MessageComponent,
	],
})
export class MoleculesModule {}
