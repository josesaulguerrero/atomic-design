import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { ChatActionsComponent } from './chat-actions/chat-actions.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
	declarations: [
		SearchBarComponent,
		ChatPreviewComponent,
		ChatDetailsComponent,
		ChatActionsComponent,
		ChatHeaderComponent,
	],
	imports: [CommonModule, AtomsModule],
	exports: [
		SearchBarComponent,
		ChatPreviewComponent,
		ChatDetailsComponent,
		ChatActionsComponent,
		ChatHeaderComponent,
	],
})
export class MoleculesModule {}
