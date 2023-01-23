import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtomsModule } from '../atoms/atoms.module';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { ChatPreviewComponent } from './chat-preview/chat-preview.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
	declarations: [
		SearchBarComponent,
		ChatPreviewComponent,
		ChatDetailsComponent,
	],
	imports: [CommonModule, AtomsModule],
	exports: [SearchBarComponent, ChatPreviewComponent, ChatDetailsComponent],
})
export class MoleculesModule {}
